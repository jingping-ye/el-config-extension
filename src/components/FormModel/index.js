const FormModel = {
  name: "FormModel",
  props: {
    config: {
      type:Object,
      default:() => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data(){
    return{
      form:{}
    }
  },
  watch:{
    form: {
      handler(newV) {
        this.$emit("input", newV);
      },
      deep: true,
      immediate: true,
    },
  },
  methods:{
    // 组合组件成树状结构
    assembleComponent(){
      // 表单整体
      let _isShowBorder = false; // 是否显示边框
      let _formTitle  = ""; // 是否显示表单标题

      // 布局
      let _isLayout = false; // 是否使用了布局
      let _layoutRowProps = {}; // 布局行配置
      let _layoutColProps = []; // 布局列配置

      // 表单项
      let formItemList = []; // 表单项列表

      
      // 判断表单项全局配置：包括表单本身和布局配置
      if(this.formConfig.extProps){
        let {isShowBorder=false, formTitle="", layout={}} = this.formConfig.extProps;
        _isShowBorder = isShowBorder,
        _formTitle = formTitle;

        // 栅栏布局只有设置了col时才有效
        if(layout.col && Object.keys(layout.col).length){
          if(Object.keys(layout.col).length){
            _isLayout = true;
            _layoutRowProps = layout.row||{};
            layout.col.forEach(colProps=>{
              if(typeof colProps === "number"){
                _layoutColProps.push({
                  span:colProps
                })
              }else if(typeof colProps === "object"){
                _layoutColProps.push(colProps)
              }
            })
          }else{
            throw new Error("栅栏布局只有设置formConfig.extProps.layout.col时才生效!")
          }
        }
      }

      // 表单项配置组件
    

      // 表单域
      const compTree = {
        name:"div",
          config:{
            style:{
              position:"relative"
            }
        },
        sub:[
          {
            name:"div",
            config:{
              class:{
                "form-config-title":true,
                "form-config-title_hide":_isShowBorder
              },
              domProps:{
                innerText:_formTitle
              }
            }
          },
          {
            name:"form",
            config:this.formConfig.props
          }
        ]
      }
      return compTree;
    },
    // 渲染子组件
    renderCompList(h) {
      
    }
  },
  render(h){
    const compList = this.renderCompList(h);
    return h(compList[0]);
  }
};
export default FormModel;