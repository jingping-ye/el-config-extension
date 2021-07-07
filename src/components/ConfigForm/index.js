// import Vue from "vue";
// Vue.component("ConfigForm", 
export default {
  name: "ConfigForm",
  watch:{
    form:{
      handler(newV){
        console.log("this", this.form);
        console.log("newV", JSON.stringify(newV));
      },
      deep:true
    }
  },
  data(){
    return {
      form:{
        username:"admin",
        password:"1231"
      }
    }
  },
  methods:{
    assembleComponent(){
      console.log("this===", this);
    }
  },
  // 一定要这种形式，回调会失败,有点类似生命周期
  render(h) {
    const _this = this;
    this.assembleComponent();
    return h(
      "el-form",
      {
        domProps: {
          // innerText: this.testText,
        },
        props: {
          ref: "form",
          model:{
            username:"admin",
            password:"qwer1234"
          },
          labelWidth:"80px"
          // "show-type": "light",
        },

      },
      [
        h("el-form-item",{
          props:{
            label:"用户名"
          },
        },
        [
          h("el-input",{
            props:{
              value: _this.form.username
            },
            on:{
               input(value) {
                // console.log("this",this);
                _this.form.username = value;
              }
            }
          }),
          
        ]),
        h("el-form-item",{
          props:{
            label:"密码"
          },
        },
        [
          h("el-input",{
            props:{
              value:"1232"
            }
          }),
          
        ]),
         h("el-form-item",{
          props:{
            label:"密码"
          },
        },
        [
          h("el-button",{
            domProps:{
              innerText:"点击我"
            },
            props:{
              value:"1232"
            },
            on: {
              click: function() {
                console.log("this", _this);
                alert(_this.msg);
              },
            },
          }),
          
        ]),

      ]
    );
  },
  props: {
    testText: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "消息",
    },
  },
}
// );
// export default ConfigForm;
