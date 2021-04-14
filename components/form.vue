<template>
    <div>
        <v-card-title class="display-1">Create client</v-card-title>
           <v-btn dense rounded dark color="amber darken-2" small @click="openUserDialog()">Create Client<v-icon>mdi-account-circle-outline</v-icon></v-btn>
      <br/>
      <br/>
      <v-dialog persistent v-model="userDialog">
          <v-card>
           <v-toolbar>
                    <v-card-title class="headline">
                     Add a client
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="userDialog = false">
                      close</v-btn
                    >
                  </v-toolbar>
                   <br/>
            <v-text-field v-model="name"  :rules="[v => !!v || 'Item is required']" outlined label="Enter your full name"></v-text-field>
             <v-select v-model="gender" :items="items"  :rules="[v => !!v || 'Item is required']" outlined label="gender"></v-select>
              <v-text-field v-model="email"  :rules="[v => !!v || 'Item is required']" outlined label="email"></v-text-field>
               <v-text-field v-model="contact_number"  :rules="[v => !!v || 'Item is required']" outlined label="contact Number"></v-text-field> 
             <v-text-field v-model="country"  :rules="[v => !!v || 'Item is required']" outlined label="country"></v-text-field> 
                <div>
                    <v-row>
                        <v-col md="10">
                            <v-card  v-for="(item, i) in clientAddress"
                    :key="i"
                    :to="item.to">
                    <br/>
               <v-text-field  :rules="[v => !!v || 'Item is required']" v-model="item.Residential_address" outlined label="ResidentialAddress"></v-text-field>
                <v-text-field  :rules="[v => !!v || 'Item is required']" v-model="item.Postal_address" outlined label="WorkAddress"></v-text-field>
                <v-text-field v-model="item.Work_address" outlined label="Work_address"></v-text-field>
                 <v-text-field v-model="item.Cell_number" outlined label="Cell_number"></v-text-field>
                  <v-text-field v-model="item.Work_number" outlined label="Work_number"></v-text-field> 
              
                    </v-card>
                    <br/>
                        </v-col>
                        <v-col>
                            <v-btn rounded dense small color="success" @click="addAddress()">Add another address</v-btn>
                        </v-col>
                    </v-row>   
                    <v-btn dark rounded color="amber darken-2" @click="postClient()">Add<v-icon>mdi-check-bold</v-icon></v-btn>
                </div>
                    </v-card>
                </v-dialog>
                <br/>
           <div>
           </div>
           <br/>
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
        screating client please wait...........
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
        return{
            dialog: false,
            userDialog: false,
            clientDetailsDialog: false,
            selectedClient: {},
        clientList: [],
        clientIDvalue: null,
        name : "",
        gender: "",
        email: "",
        contact_number: "",
        country: "",
        items: ["Female", "Male"],
        selectedGender: "",
        clientAddress:[{
            Residential_address: "",
            Postal_address  :"",
            Work_address : "",
            Cell_number  : "",
            Work_number  :"",
            Client_id : null,
        }],
        ResidentialAddress: "",
        WorkAddress:"",
        PostalAddress: "",
        CellNumber: "",
        WorkNumber: "",
        clientUpdatedData:[]
        }
    },
    computed:{
     updateSelectedClient(){
         return this.selectedClient;
     },
     updateClientIdValue(){
       return clientIDvalue;
     }
    },
    methods: {
        addAddress(){
            let objectData = {
        ResidentialAddress: this.ResidentialAddress,
        WorkAddress:this.WorkAddress,
        PostalAddress: this.PostalAddress,
        CellNumber: this.CellNumber,
        WorkNumber: this.WorkNumber
            }
            this.clientAddress.push(objectData);
             this.clientAddress.ResidentialAddress = null;
             this.clientAddress.PostalAddress = null;
              this.clientAddress.CellNumber = null;
               this.clientAddress.WorkNumber = null;
            
        },
        openUserDialog(){
         this.userDialog= true;
        },
        postClient(){
            this.userDialog = false;
            this.dialog = true;
            this.$services.clientService.createNewClient({
            name : this.name,
            gender: this.gender,
            email: this.email,
            contact_number: this.contact_number,
            country: this.country,
            }).then(res => {
                console.log(res);
                let clientID = res.id;
                this.clientIDvalue= res.id
                console.log("client id recieved");
                console.log(clientID);
                if(clientID){
                    console.log("address logging started");
                  this.clientAddress.forEach(element => {
                      console.log("client id value to  be sent",clientID)
                      let addressData = {
                            Residential_address: element.Residential_address,
                            Postal_address  :element.Postal_address,
                            Work_address :element.Work_address,
                            Cell_number  : element.Cell_number,
                            Work_number  :element.Work_number,
                      }
                      addressData.Client_id = this.clientIDvalue;
                      
                      this.$services.clientService.updateClientAddress(addressData)
                      .then(res=> {
                         console.log("client created successfully", res);
                         
                      })
                  });  
                }
                this.dialog = false;
                         alert('client created successfully');
            })
        }
    }
}
</script>

<style scoped>

</style>