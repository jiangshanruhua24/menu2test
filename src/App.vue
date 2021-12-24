<template>
  <div id="app">
    <router-view></router-view>
    <!-- <button @click="chakan">chakan</button> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      img: 'https://img1.baidu.com/it/u=2729629832,1449716056&fm=26&fmt=auto',
      arr: [{
        "id": "menu_100271",
        "text": " Home",
        "icon": "fa fa-home",
        "url": "/home/purchaser",
        "menus": [],
        "leaf": true,
      },
      {
        "id": "menu_100277",
        "text": "E-Sourcing",
        "menus": [
          {
            "id": "menu_100415",
            "text": "RFQ",
            "menus": [
              {
                "id": "menu_100410",
                "text": "Create New",
                "url": "/buyers/rfq/create",
              },
              {
                "id": "menu_100295",
                "text": "View RFQ",
                "url": "/buyers/rfq/list",
              }
            ],
          },
          {
            "id": "menu_100279",
            "text": "Contract",
            "menus": [
              {
                "id": "menu_100297",
                "text": "Contract Sign",
                "icon": "",
                "url": "/base/page-making/page_supplier_contract_list",
              },
              {
                "id": "menu_100421",
                "text": "Create New",
                "url": "/base/page-making/page_supplier_contract_form",
              }
            ],
          },
          {
            "id": "menu_100423",
            "text": "PO Placement",
            "icon": "",
            "url": null,
            "parentId": "menu_100277",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100425",
                "text": "Create New",
                "url": "/buyers/po/create",
              },
              {
                "id": "menu_100427",
                "text": "PO Confirm",
                "url": "/base/page-making/page_po_list",
              }
            ]
          },
          {
            "id": "menu_100429",
            "text": "Logistics Caculator",
            "menus": [
              {
                "id": "menu_100453",
                "text": "Sea Freight Fee",
                "url": "/Logistics_Caculator_Buliding",
              }
            ]
          }
        ],
      },
      {
        "id": "menu_100431",
        "text": "My Yeeorder",
        "icon": "",
        "url": null,
        "parentId": null,
        "displayd": 1,
        "menus": [
          {
            "id": "menu_100293",
            "text": "My Supplier",
            "icon": "",
            "url": null,
            "parentId": "menu_100431",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100325",
                "text": "My Supplier",
                "icon": "",
                "url": "/buyers/looking-for-suppliers/mine",
                "parentId": "menu_100293",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              }
            ],
            "leaf": false,
            "active": false
          },
          {
            "id": "menu_100291",
            "text": "Find New Supplier",
            "icon": "",
            "url": null,
            "parentId": "menu_100431",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100321",
                "text": "Supplier Pool",
                "icon": "",
                "url": "/buyers/looking-for-suppliers/all",
                "parentId": "menu_100291",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              },
              {
                "id": "menu_100323",
                "text": "Supplier Audit",
                "icon": "",
                "url": "/buyers/supplier-audit-logs",
                "parentId": "menu_100291",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              }
            ],
            "leaf": false,
            "active": false
          },
          {
            "id": "menu_100433",
            "text": "My PO",
            "icon": "",
            "url": null,
            "parentId": "menu_100431",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100441",
                "text": "PO View",
                "icon": "",
                "url": "/My_Yeeorder_My_PO_Buliding",
                "parentId": "menu_100433",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              }
            ],
            "leaf": false,
            "active": false
          },
          {
            "id": "menu_100443",
            "text": "My Dashboard",
            "icon": "",
            "url": null,
            "parentId": "menu_100431",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100445",
                "text": "PO Dashboard",
                "icon": "",
                "url": "/order/po-tracking/earlyWarningB2B",
                "parentId": "menu_100443",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              },
              {
                "id": "menu_100447",
                "text": "PO Tracking",
                "icon": "",
                "url": "/order/po-tracking/dashboardB2B",
                "parentId": "menu_100443",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              }
            ],
            "leaf": false,
            "active": false
          },
          {
            "id": "menu_100449",
            "text": "My Stock",
            "icon": "",
            "url": null,
            "parentId": "menu_100431",
            "displayd": 1,
            "menus": [
              {
                "id": "menu_100451",
                "text": "Building",
                "icon": "",
                "url": "/My_Stock_Buliding",
                "parentId": "menu_100449",
                "displayd": 1,
                "menus": [],
                "leaf": true,
                "active": false
              }
            ],
            "leaf": false,
            "active": false
          }
        ],
        "leaf": false,
        "active": false,
        "isFirstLevel": true
      },
      {
        "id": "menu_100287",
        "text": "My Station",
        "icon": "",
        "url": null,
        "parentId": null,
        "displayd": 1,
        "menus": [
          {
            "id": "menu_100455",
            "text": "QC",
            "icon": "",
            "url": "/base/page-making/yee_buyers_qc_list",
            "parentId": "menu_100287",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          },
          {
            "id": "menu_100457",
            "text": "Sample",
            "icon": "",
            "url": "/base/page-making/buyer_yee_sample_page_list",
            "parentId": "menu_100287",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          },
          {
            "id": "menu_100307",
            "text": "Team Org",
            "icon": "",
            "url": "/mgr/company/org",
            "parentId": "menu_100287",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          },
          {
            "id": "menu_100471",
            "text": "My Profile",
            "icon": "",
            "url": "/base/page-making/page_company_shor_introduction_purchaser",
            "parentId": "menu_100287",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          }
        ],
        "leaf": false,
        "active": false,
        "isFirstLevel": true
      },
      {
        "id": "menu_100459",
        "text": "Yee-Finance",
        "icon": "",
        "url": null,
        "parentId": null,
        "displayd": 1,
        "menus": [
          {
            "id": "menu_100461",
            "text": "Trade Tracking",
            "icon": "",
            "url": "/Yee_Finance_Buliding",
            "parentId": "menu_100459",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          }
        ],
        "leaf": false,
        "active": false,
        "isFirstLevel": true
      },
      {
        "id": "menu_100463",
        "text": "Yee-Logistis",
        "icon": "",
        "url": null,
        "parentId": null,
        "displayd": 1,
        "menus": [
          {
            "id": "menu_100465",
            "text": "Inventory Report",
            "icon": "",
            "url": "/Yee_Logistis_Inventory_Report_Buliding",
            "parentId": "menu_100463",
            "displayd": 1,
            "menus": [],
            "leaf": true,
            "active": false
          }],
        "leaf": false,
        "active": false,
        "isFirstLevel": true
      }],
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    chakan () {
      console.log(this.$router)
    }
  },
  mounted () {
  },
  components: {

  }
}
</script>
<style >
*,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
