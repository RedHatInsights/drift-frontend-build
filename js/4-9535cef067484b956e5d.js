(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{564:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n.n(a),r=n(34),o=n.n(r),l=n(14),s=n.n(l),c=n(15),u=n.n(c),d=n(16),p=n.n(d),m=n(17),f=n.n(m),b=n(18),g=n.n(b),h=n(1),E=n.n(h),w=n(4),v=n.n(w),y=n(19),C=n(234),O=n(385),B=n(386),N=n(403),k=n(405),T=n(404),P=n(432),S=n(422),D=n(180),I=n.n(D),x=n(394),F=n(396),j=n(371),R=n(395),V=n(390),L=n(389),A=n(370),_=n(341),U=n(365),W=n(245),M=function(e){function t(e){var n;return s()(this,t),(n=p()(this,f()(t).call(this,e))).submitBaselineName=n.submitBaselineName.bind(I()(I()(n))),n.state={baselineName:""},n.updateBaselineName=function(e){n.setState({baselineName:e})},n}return g()(t,e),u()(t,[{key:"submitBaselineName",value:function(){var e=this.state.baselineName,t=this.props,n=t.createBaseline,a=t.toggleCreateBaseline;n({display_name:e,baseline_facts:[]}),a()}},{key:"render",value:function(){var e=this.state.baselineName;return E.a.createElement(E.a.Fragment,null,E.a.createElement(x.a,{variant:x.b.full},E.a.createElement(F.a,{icon:_.b}),E.a.createElement(j.a,{headingLevel:"h5",size:"lg"},"Create Baseline"),E.a.createElement(R.a,null,"Create a baseline name",E.a.createElement(V.a,null,E.a.createElement(L.a,{value:e,type:"text",onChange:this.updateBaselineName,"aria-label":"baseline name"}),E.a.createElement(A.a,{onClick:this.submitBaselineName},"Submit")))))}}]),t}(h.Component);M.propTypes={toggleCreateBaseline:v.a.func,createBaseline:v.a.func};var z=Object(y.connect)(null,function(e){return{toggleCreateBaseline:function(){return e(U.a.toggleCreateBaseline())},createBaseline:function(t){return e(W.a.createBaseline(t))}}})(M),q=n(12),J=n(168);var H={exportToCSV:function(e,t){var n={exportType:e,exportData:t,baselineRowData:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]};return{type:J.a.EXPORT_BASELINES_LIST_TO_CSV,payload:n}}},K=n(377),X=n(257),$=n(430),G=function(e){function t(e){var n;return s()(this,t),(n=p()(this,f()(t).call(this,e))).state={kebabOpened:!1},n.exportSelect=n.exportSelect.bind(I()(I()(n))),n.toggleKebab=function(){var e=n.state.kebabOpened;n.setState({kebabOpened:!e})},n}return g()(t,e),u()(t,[{key:"exportSelect",value:function(){var e=this.props,t=e.exportType,n=e.baselineTableData,a=e.baselineData,i=e.baselineRowData;this.toggleKebab(),"baseline list"===t?this.props.exportToCSV(t,n):"baselines data"===t&&this.props.exportToCSV(t,a,i)}},{key:"render",value:function(){var e=this.state.kebabOpened,t=[E.a.createElement(K.a,{key:"export",component:"button",onClick:this.exportSelect},"Export as CSV")];return E.a.createElement(X.a,{style:{float:"left"},className:"action-kebab",toggle:E.a.createElement($.a,{onToggle:this.toggleKebab}),isOpen:e,dropdownItems:t,isPlain:!0})}}]),t}(h.Component);G.propTypes={exportToCSV:v.a.func,baselineTableData:v.a.array,exportType:v.a.string,baselineData:v.a.array,baselineRowData:v.a.array};var Q=Object(q.k)(Object(y.connect)(function(e){return{baselineTableData:e.baselinesTableState.baselineTableData,baselineData:e.baselinesTableState.baselineData}},function(e){return{exportToCSV:function(t,n,a){e(H.exportToCSV(t,n,a))}}})(G)),Y=n(181),Z=n.n(Y),ee=n(352),te=n.n(ee),ne=n(356),ae=n(428),ie=n(358),re=n(225),oe=n(429);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ue(e,t,n[t])})}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const de=ce({},L.a.propTypes),pe=ce({},L.a.defaultProps);[de,pe].forEach(e=>{["value","onChange"].forEach(t=>{delete e[t]})});const me=ce({},de,{defaultValue:v.a.string,onBlur:v.a.func,autoFocus:v.a.bool}),fe=ce({},pe,{defaultValue:null,onBlur:null,autoFocus:!1});class be extends E.a.Component{constructor(...e){super(...e),ue(this,"handleBlur",e=>{this.props.onBlur(e.currentTarget.value,e)})}render(){const e=this.props,{defaultValue:t,onBlur:n,autoFocus:a,value:i,onChange:r}=e,o=se(e,["defaultValue","onBlur","autoFocus","value","onChange"]);return E.a.createElement(E.a.Fragment,null,E.a.createElement(L.a,le({},o,{value:void 0,defaultValue:t,onBlur:this.handleBlur,autoFocus:a})))}}be.propTypes=me,be.defaultProps=fe;var ge=be;var he=({renderEdit:e,renderValue:t,resolveValue:n,isEditable:a=null}={})=>(i,r)=>{const{rowData:o}=r;if(n&&(i=n(i,r)),e&&o.isEditing&&(!a||a(r))){const t={activeEditId:o.editConfig&&o.editConfig.activeEditId};return e(i,r,t)}return t?t(i,r):i};const Ee={NONE:"NONE",ROW:"ROW",NO_CONFIRM_ROW:"NO_CONFIRM_ROW",TABLE_TOP:"TABLE_TOP",TABLE_BOTTOM:"TABLE_BOTTOM"};var we=n(562);const ve=["INPUT","BUTTON"];let ye=!1;const Ce=(...e)=>{const t=e.filter(e=>"function"==typeof e);return 1===t.length?t[0]:t.length>1?(...e)=>{t.forEach(t=>t(...e))}:void 0},Oe=(e,t)=>!Object.keys(e).find(n=>e[n]!==t[n]),Be=e=>{const{top:t,right:n,bottom:a,left:i,width:r,height:o,x:l,y:s}=e.getBoundingClientRect();return{top:t,right:n,bottom:a,left:i,width:r,height:o,x:l,y:s}},Ne=()=>{const{clientWidth:e,clientHeight:t}=document.documentElement;return{width:e,height:t}};function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Se(e,t,n[t])})}return e}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const De=Pe({},ae.a.propTypes,{editConfig:v.a.shape({editConfirmationType:v.a.oneOf(Object.values(Ee)),onEditCellClicked:v.a.func,onEditConfirmed:v.a.func,onEditCanceled:v.a.func}).isRequired,onRowClick:v.a.func}),Ie=Pe({},ae.a.defaultProps,{editConfig:null,onRowClick:()=>void 0}),xe=(e,t,n,a,{onRowClick:i,editConfig:r})=>{const{target:o}=e,l=o.closest("[data-key]"),s=parseInt(l&&l.getAttribute("data-key"),10);let c;if(!Number.isNaN(s)&&r&&"function"==typeof r.onEditCellClicked){const a=o.closest("[id]"),i=a&&l.contains(a)&&a.getAttribute("id")||null;i||((e,t)=>{(e.isEditing||e.isTableEditing)&&ve.indexOf(t.tagName)>=0&&!ye&&(ye=!0,console.warn(`${ve.join(", ")} elements are required to have an id for editing to work properly.`))})(t,o),c=()=>{r.onEditCellClicked(e,t,Pe({},n,{columnIndex:s,elementId:i}))}}setTimeout(()=>{t.isEditing?c&&c():(i(e,t,n,a),c&&setTimeout(c,0))},0)},Fe=e=>{let{BodyComponent:t,rows:n,editConfig:a,onRowClick:i}=e,r=Te(e,["BodyComponent","rows","editConfig","onRowClick"]);const o=n.some(e=>e.isEditing),l=n.map(e=>Pe({},e,{editConfig:a,isTableEditing:o}));return(e=>{const t=new Set(e.map((t,n)=>Object(we.a)(t,e)?n:null).filter(e=>null!==e));e.filter((n,a)=>void 0!==n.parent&&n.isEditing&&t.has(a)&&n.isEditableTogetherWithParent&&e[n.parent].isEditing).forEach(t=>{e[t.parent].isChildEditing=!0,t.isParentEditing=!0});const n=e.filter((e,n)=>!e.parent||t.has(n)).pop();if(n&&n.isParentEditing){let t=n;for(;void 0!==t.parent&&t.isEditableTogetherWithParent;)t=e[t.parent];t.isLastVisibleParent=!0}})(l),E.a.createElement(t,ke({},r,{rows:l,onRowClick:(e,t,n,r)=>xe(e,t,n,r,{onRowClick:i,editConfig:a})}))};Fe.propTypes={BodyComponent:v.a.node.isRequired,rows:v.a.array,editConfig:v.a.any,onRowClick:v.a.func},Fe.defaultProps={rows:[],editConfig:null,onRowClick:()=>void 0};var je=e=>{const t=t=>{let{editConfig:n,onRowClick:a}=t,i=Te(t,["editConfig","onRowClick"]);return E.a.createElement(re.a.Consumer,null,t=>{let{rows:r}=t,o=Te(t,["rows"]);return E.a.createElement(Fe,ke({},o,{rows:r},i,{editConfig:n,onRowClick:a,BodyComponent:e}))})};return t.propTypes=De,t.defaultProps=Ie,t},Re=n(33),Ve=n(351),Le=n.n(Ve),Ae=n(561),_e=n(347);function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){We(e,t,n[t])})}return e}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Me=e=>E.a.createElement(A.a,e,E.a.createElement(_e.b,null));Me.propTypes=Ue({},A.a.propTypes),Me.defaultProps=Ue({},A.a.defaultProps,{variant:"plain"});var ze=Me,qe=n(339);function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){He(e,t,n[t])})}return e}function He(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ke=e=>E.a.createElement(A.a,e,E.a.createElement(qe.b,null));Ke.propTypes=Je({},A.a.propTypes),Ke.defaultProps=Je({},A.a.defaultProps,{variant:"primary"});var Xe=Ke;const $e=Ae.a.parse("\n  tr.pf-c-table__editable-row {    \n    &:hover,\n    &.pf-m-editing {\n      background: #def3ff !important;\n      td {\n        border-bottom: 1px solid #7dc3e8 !important;\n        border-top: 1px solid #7dc3e8 !important;\n  \n        &:first-child {\n          border-left: 1px solid #7dc3e8 !important;\n        }\n  \n        &:last-child {\n          border-right: 1px solid #7dc3e8 !important;\n        }\n      }\n    }\n  \n    &.pf-m-table-editing-first-row {\n      border-top: 3px solid #7dc3e8 !important;\n    }\n  \n    &.pf-m-table-editing-last-row {\n      border-bottom: 3px solid #7dc3e8 !important;\n    }\n  \n    input {\n      display: block;\n      background: var(--pf-global--BackgroundColor--100);\n      border: 1px solid var(--pf-global--BorderColor);\n  \n      &:hover {\n        cursor: text;\n      }\n    }\n  }\n  \n  .pf-c-table__inline-edit-buttons {\n    position: fixed;\n    z-index: 1000;\n    padding: 4px;\n    margin: 0;\n    background: #def3ff;\n    border: 1px solid #7dc3e8;\n  \n    &.pf-m-top {\n      border-bottom: 0;\n    }\n  \n    &.pf-m-bottom {\n      border-top: 0;\n    }\n  \n    &.pf-m-bold {\n      border-width: 3px;\n    }\n  \n    button {\n      margin-left: 4px;\n  \n      &:first-child {\n        margin-left: 0;\n      }\n    }\n  }\n\n"),Ge="pf-c-table__editable-row",Qe="pf-c-table__inline-edit-buttons",Ye={tableEditingFirstRow:"pf-m-table-editing-first-row ",tableEditingLastRow:"pf-m-table-editing-last-row",editing:"pf-m-editing",top:"pf-m-top",bottom:"pf-m-bottom",bold:"pf-m-bold"};$e.inject();const Ze=({messages:{confirmButtonLabel:e,cancelButtonLabel:t},onConfirm:n,onCancel:a,environment:i,buttonsOnTop:r,boldBorder:o})=>{if(null==i)return null;const{window:l,row:s}=i,c=r?((e,t,n)=>{const a=n?-1:0;return{bottom:e.height-t.top-1+a,right:e.width-t.right+10}})(l,s,o):((e,t,n)=>{const a=n?-1:0;return{top:t.bottom-1+a,right:e.width-t.right+10}})(l,s,o),u=Object(Ae.b)(Qe,r?Ye.top:Ye.bottom,o&&Ye.bold);return E.a.createElement("div",{style:c,className:u,key:"confirmButtons"},E.a.createElement(Xe,{key:"confirm","aria-label":e,onMouseUp:n}),E.a.createElement(ze,{key:"cancel","aria-label":t,onMouseUp:a}))};Ze.defaultProps={onConfirm:()=>void 0,onCancel:()=>void 0,buttonsOnTop:!1,boldBorder:!1,environment:void 0,messages:{confirmButtonLabel:"Save",cancelButtonLabel:"Cancel"}},Ze.propTypes={onConfirm:v.a.func,onCancel:v.a.func,environment:v.a.shape({window:v.a.shape({width:v.a.number,height:v.a.number}),row:v.a.shape({top:v.a.number,bottom:v.a.number,left:v.a.number,right:v.a.number})}),buttonsOnTop:v.a.bool,boldBorder:v.a.bool,messages:v.a.shape({confirmButtonLabel:v.a.string,cancelButtonLabel:v.a.string})};var et=Ze;function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function at(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){it(e,t,n[t])})}return e}function it(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}$e.inject();const rt=at({},ie.a.propTypes,{trRef:v.a.func,className:v.a.string,onScroll:v.a.func,onResize:v.a.func,row:v.a.shape({isOpen:v.a.bool,isExpanded:v.a.bool,isEditing:v.a.bool,isTableEditing:v.a.bool,isFirstVisible:v.a.bool,isLastVisible:v.a.bool,isChildEditing:v.a.bool,isParentEditing:v.a.bool,isLastVisibleParent:v.a.bool,editConfig:v.a.object}),rowProps:v.a.object}),ot=at({},ie.a.defaultProps,{trRef:void 0,className:"",onScroll:void 0,onResize:void 0,row:{isOpen:void 0,isExpanded:void 0,isEditing:void 0,isTableEditing:void 0,isFirstVisible:void 0,isLastVisible:void 0,isChildEditing:void 0,isParentEditing:void 0,isLastVisibleParent:void 0,editConfig:void 0},rowProps:null}),lt={TABLE_TOP:{hasConfirmationButtons:({isTableEditing:e,isFirstVisible:t})=>e&&t,isTableConfirmation:()=>!0,areButtonsOnTop:()=>!0,hasBoldBorder:()=>!0,getEditStyles:({isTableEditing:e,isFirstVisible:t})=>Object(Ae.b)(Ge,e&&t&&Ye.tableEditingFirstRow)},TABLE_BOTTOM:{hasConfirmationButtons:({isTableEditing:e,isLastVisible:t})=>e&&t,isTableConfirmation:()=>!0,areButtonsOnTop:()=>!1,hasBoldBorder:()=>!0,getEditStyles:({isTableEditing:e,isLastVisible:t})=>Object(Ae.b)(Ge,e&&t&&Ye.tableEditingLastRow)},ROW:{hasConfirmationButtons:({isEditing:e,isParentEditing:t,isLastVisibleParent:n,isChildEditing:a,isLastVisible:i})=>e&&!(a&&t)&&!(t&&i)&&!(a&&!n),isTableConfirmation:()=>!1,areButtonsOnTop:({isLastVisible:e,isLastVisibleParent:t})=>e||t,hasBoldBorder:()=>!1,getEditStyles:({isEditing:e})=>Object(Ae.b)(Ge,e&&Ye.editing)},NO_CONFIRM_ROW:{hasConfirmationButtons:()=>!1,isTableConfirmation:()=>!1,areButtonsOnTop:()=>!1,hasBoldBorder:()=>!1,getEditStyles:({isEditing:e})=>Object(Ae.b)(Ge,e&&Ye.editing)},NONE:{hasConfirmationButtons:()=>!1,isTableConfirmation:()=>!1,areButtonsOnTop:()=>!1,hasBoldBorder:()=>!1,getEditStyles:()=>Object(Ae.b)(Ge)}},st=({editConfig:e})=>lt[e&&e.editConfirmationType]||lt[Ee.NONE];var ct=e=>{class t extends E.a.Component{constructor(e){super(e),it(this,"setStateWith2dEquals",e=>{this.setState(t=>Object.keys(e).find(n=>!Oe(e[n],t[n]))?e:null)}),it(this,"saveRowDimensions",e=>{e&&(this.element=e,this.tableElem=e.closest("table")),this.updateRowDimensions()}),it(this,"updateRowDimensions",()=>{this.element&&this.setStateWith2dEquals({rowDimensions:Be(this.element)})}),it(this,"handleScroll",e=>{this.updateRowDimensions()}),it(this,"handleResize",e=>{this.fetchClientDimensions(),this.updateRowDimensions()}),this.state=at({rowDimensions:{},window:{}},t.getDerivedStateFromProps(e))}componentDidMount(){this.state.hasConfirmationButtons&&this.fetchClientDimensions()}fetchClientDimensions(){this.setStateWith2dEquals({window:Ne()})}getConfirmationButtons(){const e=this.props,{row:t,rowProps:n}=e,a=nt(e,["row","rowProps"]),{isLastVisible:i,isParentEditing:r,isLastVisibleParent:o,editConfig:l}=t;if(!l)return null;const{onEditConfirmed:s,onEditCanceled:c}=l,u=st(t);let d;if(this.element&&this.state.rowDimensions){const e=u.isTableConfirmation()?{}:n,l=u.isTableConfirmation()?null:t;d=Object(Re.createPortal)(E.a.createElement(et,tt({},a,{onConfirm:t=>s(t,l,e),onCancel:t=>c(t,l,e),buttonsOnTop:u.areButtonsOnTop({isLastVisible:i,isParentEditing:r,isLastVisibleParent:o}),boldBorder:u.hasBoldBorder(),environment:{window:this.state.window,row:Be(this.element)}})),this.tableElem?this.tableElem.parentNode:document.body)}return d}render(){const{trRef:t,className:n,onScroll:a,onResize:i,row:{isFirstVisible:r,isLastVisible:o,isEditing:l,isTableEditing:s,editConfig:c}}=this.props,{hasConfirmationButtons:u}=this.state,d=st({editConfig:c}).getEditStyles({isEditing:l,isTableEditing:s,isFirstVisible:r,isLastVisible:o});return E.a.createElement(E.a.Fragment,null,E.a.createElement(e,tt({},this.props,{trRef:Ce(this.saveRowDimensions,t),className:Le()(d,n),onScroll:Ce(u&&this.handleScroll,a),onResize:Ce(u&&this.handleResize,i)})),u&&this.getConfirmationButtons())}}return it(t,"getDerivedStateFromProps",(e,t)=>({hasConfirmationButtons:st(e.row).hasConfirmationButtons(e.row)})),t.propTypes=rt,t.defaultProps=ot,t},ut=n(348),dt=n(342);var pt=function(e){function t(e){var n;s()(this,t),(n=p()(this,f()(t).call(this,e))).finishBaselineEdit=n.finishBaselineEdit.bind(I()(I()(n))),n.addFact=n.addFact.bind(I()(I()(n))),n.renderAddNewFact=n.renderAddNewFact.bind(I()(I()(n))),n.renderEditBaselineName=n.renderEditBaselineName.bind(I()(I()(n))),n.props.fetchBaselineData(n.props.baselineUUID),n.makeId=function(e){var t=e.column,n=e.rowIndex,a=e.columnIndex,i=e.name;return"".concat(t.property,"-").concat(n,"-").concat(a).concat(i?"-".concat(i):"")};var a,i=function(e,t){var a=t.column,i=t.rowIndex,r=t.rowData,o=t.columnIndex,l=t.activeEditId;return E.a.createElement(ne.a,null,r.data.modules.map(function(e,t){var r={marginLeft:t&&"1em",display:"inline-block",width:"48%"},s=n.makeId({rowIndex:i,columnIndex:o,column:a,name:"module-".concat(t)});return E.a.createElement(ge,{id:s,key:s,defaultValue:e,style:r,onBlur:function(e){return n.onChange(e,{rowIndex:i,moduleIndex:t})},autoFocus:l===s})}))},r=function(e,t){var a=t.column,i=t.rowIndex,r=t.columnIndex,o=t.activeEditId,l=n.makeId({rowIndex:i,columnIndex:r,column:a,name:"parent-repo"});return E.a.createElement(ge,{id:l,key:l,defaultValue:e,onBlur:function(e){return n.onChange(e,{rowIndex:i,columnIndex:r})},autoFocus:o===l})},o=he({renderValue:function(e,t){var n=t.rowData;return n.hasOwnProperty("parent")?E.a.createElement(ne.a,null,n.data.modules.filter(function(e){return e}).join(", ")):e},renderEdit:function(e,t,n){var a=t.column,o=t.columnIndex,l=t.rowIndex,s=t.rowData,c=n.activeEditId;return(s.hasOwnProperty("parent")?i:r)(e,{rowData:s,column:a,rowIndex:l,columnIndex:o,activeEditId:c})}}),l=te()(new Array(5)).map(function(){return te()(new Array(2)).map(function(e){return E.a.createElement(C.Skeleton,{key:e,size:C.SkeletonSize.md})})});return a=n.props.baselineData?n.props.baselineData.display_name:"",n.state={loadingColumns:["Fact","Value"],columns:[{title:"Fact",cellFormatters:[o]},{title:"Value",cellFormatters:[o]}],rows:l,editedRowsBackup:null,activeEditId:null,baselineName:a,factName:"",valueName:"",showAddNewFact:!1,showAddNewParentFact:!1,parentRowId:void 0,isEditingBaselineName:!1},n.changeFactName=function(e){n.setState({factName:e})},n.changeValueName=function(e){n.setState({valueName:e})},n.submitBaselineName=function(){var e=n.props,t=e.patchBaseline,a=e.baselineData,i={display_name:document.getElementById("newBaselineName").value};t(a.id,i),n.clearFactAndValueData(),n.toggleIsEditingBaselineName()},n.onChange=function(e,t){var a=t.rowIndex,i=t.columnIndex,r=t.moduleIndex;n.setState(function(t){var o=t.rows,l=n.props,s=l.baselineData,c=l.patchBaseline,u=(o=te()(o))[a];if(null!=r)u.data.modules[r]=e;else{var d=i-1;u.cells[d]=e}var p=n.buildApiBody(o,a);return c(s.id,p),{rows:o,activeEditId:null}})},n.buildApiBody=function(e,t){var n=e[t],a={},i=[];if(n.parent||0===n.parent){var r=e[n.parent],o=e.filter(function(n){return n.parent===e[t].parent}).map(function(e){return{name:e.data.modules[0],value:e.data.modules[1]}});i.push({name:r.cells[0],values:o}),a.baseline_facts=i}else i.push({name:n.cells[0],value:n.cells[1]}),a.baseline_facts=i;return a},n.onEditCellClicked=function(e,t,a){var i=a.rowIndex,r=a.columnIndex,o=a.elementId;o!==n.state.activeEditId&&t.isEditing&&4!==r&&n.setState(function(e){var t=e.rows;return{activeEditId:o,rows:t.map(function(e,t){return t===i&&0===r&&e.hasOwnProperty("isOpen")&&(e.isOpen=!e.isOpen),e})}})},n.getParentId=function(e,t){return void 0===t[e].parent?e:t[e].parent},n.getChildId=function(e,t){return void 0===t[e].parent?t.map(function(t,n){return t.parent===e?n:null}).find(function(e){return null!==e}):e},n.onEditActionClick=function(e,t){n.setState(function(e){var n=e.rows;if(!e.editedRowBackup){var a=Z()({},t,n[t]);return{editedRowsBackup:JSON.parse(JSON.stringify(a)),rows:n.map(function(e,t){return e.isEditing=!!a[t],e})}}})},n.onEditConfirmed=function(){n.setState(function(e){var t=e.rows,n=e.editedRowsBackup;return t=te()(t),Object.keys(n).forEach(function(e){t[e].isEditing=!1}),{rows:t,editedRowsBackup:null,activeEditId:null}})},n.onEditCanceled=function(){n.setState(function(e){var t=e.rows,n=e.editedRowsBackup;return t=te()(t),Object.keys(n).forEach(function(e){t[e]=n[e]}),{rows:t,editedRowsBackup:null,activeEditId:null}})},n.onCollapse=function(e,t,a){var i=n.state.rows;i[t].isOpen=a,n.setState({rows:i})},n.onNewFactActionClick=function(e,t){n.setState({parentRowId:t,showAddNewFact:!0})},n.actionResolver=function(e){return e.isTableEditing?null:""===e.cells[1]?[{title:"Add fact",onClick:n.onNewFactActionClick}]:[{title:"Edit",onClick:n.onEditActionClick}]},n.toggleNewFact=function(){var e=n.state.showAddNewFact;n.setState({showAddNewFact:!e,factName:"",valueName:""})},n.toggleNewParentFact=function(){var e=n.state.showAddNewParentFact;n.setState({showAddNewParentFact:!e,factName:""})},n.clearFactAndValueData=function(){n.setState({factName:"",valueName:"",showAddNewFact:!1,showAddNewParentFact:!1,parentRowId:void 0})},n.toggleIsEditingBaselineName=function(){var e=n.state.isEditingBaselineName;n.setState({isEditingBaselineName:!e})},n}return g()(t,e),u()(t,[{key:"finishBaselineEdit",value:function(){(0,this.props.clearBaselineData)()}},{key:"renderAddNewFact",value:function(){var e=this.state,t=e.showAddNewFact,n=e.showAddNewParentFact;return t||n?E.a.createElement(E.a.Fragment,null,E.a.createElement(N.a,{className:"display-margin"},E.a.createElement(V.a,null,E.a.createElement(L.a,{id:"newFactName",type:"text",placeholder:"Fact","aria-label":"fact name"}),t?E.a.createElement(L.a,{id:"newFactValue",type:"text",placeholder:"Value","aria-label":"value name"}):null,E.a.createElement(A.a,{variant:"primary",onClick:this.addFact},"Submit"),t?E.a.createElement(A.a,{variant:"danger",onClick:this.toggleNewFact},"Cancel"):E.a.createElement(A.a,{variant:"danger",onClick:this.toggleNewParentFact},"Cancel")))):E.a.createElement(N.a,{className:"display-margin"},E.a.createElement(k.a,null,E.a.createElement(T.a,null,E.a.createElement(A.a,{variant:"primary",onClick:this.toggleNewParentFact},E.a.createElement(ut.b,null),"Add Parent Fact"))),E.a.createElement(k.a,null,E.a.createElement(T.a,null,E.a.createElement(A.a,{variant:"primary",onClick:this.toggleNewFact},E.a.createElement(ut.b,null),"Add Fact"))))}},{key:"addFact",value:function(){var e,t=this.state,n=t.parentRowId,a=t.rows,i=this.props,r=i.baselineData,o=i.patchBaseline,l=document.getElementById("newFactName").value,s=document.getElementById("newFactValue");if(null!==s){var c=s.value;if(n||0===n){var u=a[n],d=[],p=a.filter(function(e){return e.parent===n}).map(function(e){return{name:e.data.modules[0],value:e.data.modules[1]}});p.push({name:l,value:c}),d.push({name:u.cells[0],values:p}),e={baseline_facts:d}}else e={baseline_facts:[{name:l,value:c}]}}else e={baseline_facts:[{name:l,values:[]}]};o(r.id,e),this.clearFactAndValueData()}},{key:"renderEditBaselineName",value:function(){var e=this.state,t=e.isEditingBaselineName,n=e.baselineName;return t?E.a.createElement(N.a,{className:"display-margin"},E.a.createElement(V.a,null,E.a.createElement(L.a,{id:"newBaselineName",type:"text","aria-label":"baseline name"}),E.a.createElement(A.a,{onClick:this.submitBaselineName},"Submit"),E.a.createElement(A.a,{variant:"danger",onClick:this.toggleIsEditingBaselineName},"Cancel"))):E.a.createElement("div",{className:"display-margin"},n," ",E.a.createElement(dt.b,{className:"not-active",onClick:this.toggleIsEditingBaselineName}))}},{key:"render",value:function(){var e=this.state,t=e.activeEditId,n=e.loadingColumns,a=e.columns,i=e.rows,r=this.props.baselineData,o={activeEditId:t,onEditCellClicked:this.onEditCellClicked,editConfirmationType:Ee.ROW,onEditConfirmed:this.onEditConfirmed,onEditCanceled:this.onEditCanceled},l=je(ae.a),s=ct(ie.a);return E.a.createElement(E.a.Fragment,null,this.renderEditBaselineName(),r?E.a.createElement(re.d,{cells:a,rows:i,rowWrapper:s,onCollapse:this.onCollapse,actionResolver:this.actionResolver},E.a.createElement(oe.a,null),E.a.createElement(l,{editConfig:o})):E.a.createElement(re.d,{cells:n,rows:i},E.a.createElement(oe.a,null),E.a.createElement(ae.a,null)),E.a.createElement("br",null),this.renderAddNewFact(),E.a.createElement(A.a,{className:"button-margin margin-right",style:{float:"right"},variant:"primary",onClick:this.finishBaselineEdit},"Finish"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.baselineData&&e.baselineDataLoading!==t.baselineDataLoading)return{rows:(n=e.baselineData,a=[],i=0,n?n.baseline_facts.forEach(function(e){var t=[],n=i;t.push(e.name),e.values?(t.push(""),a.push({cells:t,isOpen:!1}),e.values.forEach(function(e){var t=[];i++,t.push(e.name),t.push(e.value),a.push({cells:[null],data:{modules:t},parent:n})}),i++):(t.push(e.value),a.push({cells:t,isOpen:!1}),i++)}):a=[],a),baselineName:e.baselineData.display_name,baselineDataLoading:e.baselineDataLoading};var n,a,i}}]),t}(h.Component);pt.propTypes={toggleCreateBaseline:v.a.func,clearBaselineData:v.a.func,baselineUUID:v.a.string,baselineData:v.a.object,baselineDataLoading:v.a.bool,patchBaseline:v.a.func,fetchBaselineData:v.a.func};var mt=Object(y.connect)(function(e){return{baselineUUID:e.baselinesTableState.baselineUUID,baselineData:e.baselinesTableState.baselineData,baselineDataLoading:e.baselinesTableState.baselineDataLoading}},function(e){return{fetchBaselineData:function(t){return e(W.a.fetchBaselineData(t))},toggleCreateBaseline:function(){return e(U.a.toggleCreateBaseline())},clearBaselineData:function(){return e(W.a.clearBaselineData())},patchBaseline:function(t,n){return e(W.a.patchBaseline(t,n))}}})(pt),ft=function(e){function t(e){return s()(this,t),p()(this,f()(t).call(this,e))}var n;return g()(t,e),u()(t,[{key:"componentDidMount",value:(n=o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.creatingNewBaseline,n=e.baselineUUID,a=e.fullBaselineListData;return E.a.createElement(E.a.Fragment,null,E.a.createElement(C.PageHeader,null,E.a.createElement(C.PageHeaderTitle,{title:"Baselines"})),E.a.createElement(C.Main,null,E.a.createElement(O.a,{className:"pf-t-light pf-m-opaque-100"},t?E.a.createElement(B.a,null,E.a.createElement("div",null,E.a.createElement(z,null))):null,""!==n?E.a.createElement(B.a,null,E.a.createElement("div",null,E.a.createElement(mt,null))):null,t||""!==n?null:E.a.createElement(B.a,null,0!==a.length?E.a.createElement(N.a,{className:"drift-toolbar"},E.a.createElement(k.a,null,E.a.createElement(T.a,null,E.a.createElement(S.a,null)),E.a.createElement(T.a,null,E.a.createElement(Q,{exportType:"baseline list"})))):null,E.a.createElement("div",null,E.a.createElement(P.a,null))))))}}]),t}(h.Component);ft.propTypes={creatingNewBaseline:v.a.bool,baselineUUID:v.a.string,fullBaselineListData:v.a.array};t.default=Object(y.connect)(function(e){return{creatingNewBaseline:e.baselinesPageState.creatingNewBaseline,baselineUUID:e.baselinesTableState.baselineUUID,fullBaselineListData:e.baselinesTableState.fullBaselineListData}},null)(ft)}}]);
//# sourceMappingURL=../sourcemaps/4.js.map