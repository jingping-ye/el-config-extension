const config = {
  formConfig:{
    id:"myForm",
    props:{
      model:"form",
      rules:{},
      inline:true
    },
    // 扩展属性
    extProps:{
      isShowBorder:false,
      formTitle:"表单123",
      layout:{
        row:{
          gutter:"20",
        },
        col:[8,8,8],
      }
    }
  },
  formItemConfig:[
    {
      id:"username",
      name:"ks-input",
      props:{
        label:"用户名",
        required:true,
        disabled:false
      },
    },
    {
      id:"password",
      name:"ks-input",
      props:{
        label:"密码",
        required:true,
        disabled:false
      },
    },
    {
      id:"age",
      name:"ks-input",
      props:{
        label:"年龄",
      }
    },
    {
      id:"gender",
      name:"ks-input",
      props:{
        label:"年龄",
      }
    }
  ]
}
export default config;