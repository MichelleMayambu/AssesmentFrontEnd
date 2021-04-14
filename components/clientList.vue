<template>
    <div>
        <v-card-title class="display-1">Client List</v-card-title>
         <v-btn dense rounded dark color="success" small @click="refreshList()">Refresh<v-icon>mdi-refresh</v-icon></v-btn>
           <v-btn dense rounded dark color="amber darken-2" small @click="csvExport(clientList)">Export<v-icon>mdi-upload</v-icon></v-btn>
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Client_id
          </th>
          <th class="text-left">
            name
          </th>
           <th class="text-left">
            email
          </th>
           <th class="text-left">
            postal_address
          </th>
           <th class="text-left">
            residential_address
          </th>
           <th class="text-left">
            cell_number
          </th>
           <th class="text-left">
            work_number
          </th>
           <th class="text-left">
            cell_number
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in clientList"
          :key="item.client_id"
        >
          <td>{{ item.client_id }}</td>
          <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.postal_address }}</td>
          <td>{{ item.residential_address }}</td>
          <td>{{ item.cell_number }}</td>
          <td>{{ item.work_number }}</td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="purple"
        dark
      >
        <v-card-text>
         generating client list...........
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
        </div>
</template>

<script>
export default {
    data(){
        return {
       clientList: null,
       dialog: true,
        }
    },
    mounted() {
    this.getClientList();
    },
    computed: {
        updateClientList(){
            return  clientList;
        }
    },
    methods: {
      refreshList(){
        this.dialog =true;
       this.clientList =null;
       this.getClientList();

      },
     getClientList(){
        this.$services.clientService.getClientList().then(res => {
          this.clientList=res;
          this.dialog = false;
        })
     },
     //export and create CSV file
     csvExport(clientList){
       var currentDate = new Date();
      var readableDateFormat = currentDate.toDateString();
         let csvContent = "data:text/csv;charset=utf-8,";
       
        csvContent += [
          Object.keys(clientList[0]).join(";"),//extract key values
          ...clientList.map(item => Object.values(item).join(";")) //extract object values
        ]
          .join("\n")
          .replace(/(^\[)|(\]$)/gm, "''");
        const data = encodeURI(csvContent);
      
        const link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute(
          "download",
          "clientList" + " " + readableDateFormat + ".csv"
        );
        link.click();
     }
    }
}
</script>