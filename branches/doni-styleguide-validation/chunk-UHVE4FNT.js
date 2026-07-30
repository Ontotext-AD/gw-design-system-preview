import{a as oe,c as tt,d as Te,e as ke,f as be,g as nt,h as it,j as ie,k as lt,l as at,m as dt,o as st}from"./chunk-VYP53CHR.js";import{i as ot}from"./chunk-724DIT5A.js";import{A as Ge,Aa as Je,Ba as et,G as Oe,Ia as X,Ka as $,La as Ae,Ma as y,Na as Y,Oa as he,Pa as Pe,Q as We,Qa as Ne,Va as Se,Wa as rt,X as Le,Y as Xe,Z as Ye,ga as Ze,i as Ce,j as Fe,k as me,l as Ke,m as H,o as U,y as ge,ya as W,z as ae,za as N}from"./chunk-VAPESV2I.js";import{$b as ee,Ab as m,Ba as s,Bb as b,Fb as Be,Hb as ne,Ib as u,Jb as fe,Ka as Re,Kb as xe,Lb as qe,N as Q,O as q,P as Z,Pa as I,Qa as J,Qb as z,R as P,Rb as je,Sb as R,T as v,Ta as j,Tb as ye,Ua as E,Ub as ve,Va as c,Y as S,Yb as le,Z as w,_ as D,a as De,ab as x,bb as He,cb as Ue,da as C,db as V,dc as G,eb as F,fc as Ve,gb as $e,hb as Qe,ia as se,ib as l,jb as f,kb as _,kc as g,lb as k,lc as B,ma as T,ob as ce,pb as O,qb as L,rb as A,sb as pe,ub as M,vb as d,yb as K,zb as ue}from"./chunk-NRO6P6SQ.js";var ct=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Ot=["icon"],Lt=["content"],gt=t=>({$implicit:t});function At(t,a){t&1&&A(0)}function Pt(t,a){if(t&1&&k(0,"span",0),t&2){let e=d(3);u(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),l("pBind",e.ptm("icon"))}}function zt(t,a){if(t&1&&V(0,Pt,1,3,"span",2),t&2){let e=d(2);F(e.onIcon||e.offIcon?0:-1)}}function Rt(t,a){t&1&&A(0)}function Ht(t,a){if(t&1&&c(0,Rt,1,0,"ng-container",1),t&2){let e=d(2);l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",R(2,gt,e.checked))}}function Ut(t,a){if(t&1&&(V(0,zt,1,1)(1,Ht,1,4,"ng-container"),f(2,"span",0),fe(3),_()),t&2){let e=d();F(e.iconTemplate?1:0),s(2),u(e.cx("label")),l("pBind",e.ptm("label")),s(),xe(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var $t=`
    ${ct}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Qt={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},pt=(()=>{class t extends X{name="togglebutton";style=$t;classes=Qt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var ut=new P("TOGGLEBUTTON_INSTANCE"),qt={provide:oe,useExisting:Q(()=>ze),multi:!0},ze=(()=>{class t extends ie{componentName="ToggleButton";$pcToggleButton=v(ut,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=G(void 0,{transform:g});onChange=new C;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=v(pt);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,o){this.checked=e,o(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&K(i,Ot,4)(i,Lt,4)(i,W,4),o&2){let r;m(r=b())&&(n.iconTemplate=r.first),m(r=b())&&(n.contentTemplate=r.first),m(r=b())&&(n.templates=r)}},hostVars:11,hostBindings:function(o,n){o&1&&M("keydown",function(r){return n.onKeyDown(r)})("click",function(r){return n.toggle(r)}),o&2&&(x("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",n.active)("data-p-disabled",n.$disabled())("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",B],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",g],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[z([qt,pt,{provide:ut,useExisting:t},{provide:$,useExisting:t}]),j([Ne,y]),E],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(o,n){o&1&&(f(0,"span",0),c(1,At,1,0,"ng-container",1),V(2,Ut,4,5),_()),o&2&&(u(n.cx("content")),l("pBind",n.ptm("content")),x("data-p",n.dataP),s(),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",R(7,gt,n.checked)),s(),F(n.contentTemplate?-1:2))},dependencies:[U,H,N,Y,y],encapsulation:2,changeDetection:0})}return t})();var ht=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Kt=["item"],Gt=(t,a)=>({$implicit:t,index:a});function Wt(t,a){return this.getOptionLabel(a)}function Xt(t,a){t&1&&A(0)}function Yt(t,a){if(t&1&&c(0,Xt,1,0,"ng-container",3),t&2){let e=d(2),o=e.$implicit,n=e.$index,i=d();l("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",ye(2,Gt,o,n))}}function Zt(t,a){t&1&&c(0,Yt,1,5,"ng-template",null,0,le)}function Jt(t,a){if(t&1){let e=pe();f(0,"p-togglebutton",2),M("onChange",function(n){let i=S(e),r=i.$implicit,p=i.$index,h=d();return w(h.onOptionSelect(n,r,p))}),V(1,Zt,2,0),_()}if(t&2){let e=a.$implicit,o=d();l("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(e))("onLabel",o.getOptionLabel(e))("offLabel",o.getOptionLabel(e))("disabled",o.$disabled()||o.isOptionDisabled(e))("allowEmpty",o.getAllowEmpty())("size",o.size())("fluid",o.fluid())("pt",o.ptm("pcToggleButton"))("unstyled",o.unstyled()),s(),F(o.itemTemplate||o._itemTemplate?1:-1)}}var en=`
    ${ht}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,tn={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},ft=(()=>{class t extends X{name="selectbutton";style=en;classes=tn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var mt=new P("SELECTBUTTON_INSTANCE"),nn={provide:oe,useExisting:Q(()=>bt),multi:!0},bt=(()=>{class t extends ie{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=G();fluid=G(void 0,{transform:g});onOptionClick=new C;onChange=new C;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=v(ft);$pcSelectButton=v(mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?ge(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ge(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?ge(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,o,n){if(this.$disabled()||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let r=this.getOptionValue(o),p;if(this.multiple)i?p=this.value.filter(h=>!ae(h,r,this.equalityKey||void 0)):p=this.value?[...this.value,r]:[r];else{if(i&&!this.allowEmpty)return;p=i?null:r}this.focusedIndex=n,this.value=p,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:o,index:n})}changeTabIndexes(e,o){let n,i;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[r],index:r});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(e,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(o=>!ae(o,this.getOptionValue(e),this.dataKey))}isSelected(e){let o=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(ae(i,n,this.dataKey)){o=!0;break}}}else o=ae(this.getOptionValue(e),this.value,this.equalityKey||void 0);return o}templates;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}writeControlValue(e,o){this.value=e,o(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&K(i,Kt,4)(i,W,4),o&2){let r;m(r=b())&&(n.itemTemplate=r.first),m(r=b())&&(n.templates=r)}},hostVars:5,hostBindings:function(o,n){o&2&&(x("role","group")("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),u(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",g],tabindex:[2,"tabindex","tabindex",B],multiple:[2,"multiple","multiple",g],allowEmpty:[2,"allowEmpty","allowEmpty",g],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",g],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[z([nn,ft,{provide:mt,useExisting:t},{provide:$,useExisting:t}]),j([y]),E],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&$e(0,Jt,2,12,"p-togglebutton",1,Wt,!0),o&2&&Qe(n.options)},dependencies:[ze,be,Te,ke,U,H,N,Y],encapsulation:2,changeDetection:0})}return t})(),Ai=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[bt,N,N]})}return t})();var _t=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var on=["handle"],rn=["input"],ln=t=>({checked:t});function an(t,a){t&1&&A(0)}function dn(t,a){if(t&1&&c(0,an,1,0,"ng-container",3),t&2){let e=d();l("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",R(2,ln,e.checked()))}}var sn=`
    ${_t}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,cn={root:{position:"relative"}},pn={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},xt=(()=>{class t extends X{name="toggleswitch";style=sn;classes=pn;inlineStyles=cn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var yt=new P("TOGGLESWITCH_INSTANCE"),un={provide:oe,useExisting:Q(()=>vt),multi:!0},vt=(()=>{class t extends ie{componentName="ToggleSwitch";$pcToggleSwitch=v(yt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=G();ariaLabelledBy;autofocus;onChange=new C;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=v(xt);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="handle"?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,o){o(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,n,i){if(o&1&&K(i,on,4)(i,W,4),o&2){let r;m(r=b())&&(n.handleTemplate=r.first),m(r=b())&&(n.templates=r)}},viewQuery:function(o,n){if(o&1&&ue(rn,5),o&2){let i;m(i=b())&&(n.input=i.first)}},hostVars:7,hostBindings:function(o,n){o&1&&M("click",function(r){return n.onHostClick(r)}),o&2&&(x("data-p-checked",n.checked())("data-p-disabled",n.$disabled())("data-p",n.dataP),ne(n.sx("root")),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",B],inputId:"inputId",readonly:[2,"readonly","readonly",g],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",g]},outputs:{onChange:"onChange"},features:[z([un,xt,{provide:yt,useExisting:t},{provide:$,useExisting:t}]),j([y]),E],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&(f(0,"input",1,0),M("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()}),_(),f(2,"div",2)(3,"div",2),V(4,dn,1,4,"ng-container"),_()()),o&2&&(u(n.cx("input")),l("checked",n.checked())("pAutoFocus",n.autofocus)("pBind",n.ptm("input")),x("id",n.inputId)("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-checked",n.checked())("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("name",n.name())("tabindex",n.tabindex),s(2),u(n.cx("slider")),l("pBind",n.ptm("slider")),x("data-p",n.dataP),s(),u(n.cx("handle")),l("pBind",n.ptm("handle")),x("data-p",n.dataP),s(),F(n.handleTemplate||n._handleTemplate?4:-1))},dependencies:[U,H,Se,N,Y,y],encapsulation:2,changeDetection:0})}return t})(),dr=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[vt,N,N]})}return t})();var gn=["data-p-icon","minus"],Ct=(()=>{class t extends he{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["","data-p-icon","minus"]],features:[E],attrs:gn,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,n){o&1&&(D(),ce(0,"path",0))},encapsulation:2})}return t})();var Tt=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var hn=["icon"],fn=["input"],mn=(t,a,e)=>({checked:t,class:a,dataP:e});function bn(t,a){if(t&1&&k(0,"span",8),t&2){let e=d(3);u(e.cx("icon")),l("ngClass",e.checkboxIcon)("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function _n(t,a){if(t&1&&(D(),k(0,"svg",9)),t&2){let e=d(3);u(e.cx("icon")),l("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function xn(t,a){if(t&1&&(O(0),c(1,bn,1,5,"span",6)(2,_n,1,4,"svg",7),L()),t&2){let e=d(2);s(),l("ngIf",e.checkboxIcon),s(),l("ngIf",!e.checkboxIcon)}}function yn(t,a){if(t&1&&(D(),k(0,"svg",10)),t&2){let e=d(2);u(e.cx("icon")),l("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function vn(t,a){if(t&1&&(O(0),c(1,xn,3,2,"ng-container",3)(2,yn,1,4,"svg",5),L()),t&2){let e=d();s(),l("ngIf",e.checked),s(),l("ngIf",e._indeterminate())}}function Cn(t,a){}function Tn(t,a){t&1&&c(0,Cn,0,0,"ng-template")}var kn=`
    ${Tt}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Nn={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},kt=(()=>{class t extends X{name="checkbox";style=kn;classes=Nn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Nt=new P("CHECKBOX_INSTANCE"),Sn={provide:oe,useExisting:Q(()=>Ee),multi:!0},Ee=(()=>{class t extends ie{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=G();size=G();onChange=new C;onFocus=new C;onBlur=new C;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Ge(this.value,this.modelValue())}_indeterminate=se(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=v(kt);bindDirectiveInstance=v(y,{self:!0});$pcCheckbox=v(Nt,{optional:!0,skipSelf:!0})??void 0;$variant=ee(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let o,n=this.injector.get(tt,null,{optional:!0,self:!0}),i=n&&!this.formControl?n.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(r=>!ae(r,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,n,i){if(o&1&&K(i,hn,4)(i,W,4),o&2){let r;m(r=b())&&(n.checkboxIconTemplate=r.first),m(r=b())&&(n.templates=r)}},viewQuery:function(o,n){if(o&1&&ue(fn,5),o&2){let i;m(i=b())&&(n.inputViewChild=i.first)}},hostVars:6,hostBindings:function(o,n){o&2&&(x("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled())("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",g],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",B],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",g],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",g],autofocus:[2,"autofocus","autofocus",g],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[z([Sn,kt,{provide:Nt,useExisting:t},{provide:$,useExisting:t}]),j([y]),E],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,n){o&1&&(f(0,"input",1,0),M("focus",function(r){return n.onInputFocus(r)})("blur",function(r){return n.onInputBlur(r)})("change",function(r){return n.handleChange(r)}),_(),f(2,"div",2),c(3,vn,3,2,"ng-container",3)(4,Tn,1,0,null,4),_()),o&2&&(ne(n.inputStyle),u(n.cn(n.cx("input"),n.inputClass)),l("checked",n.checked)("pBind",n.ptm("input")),x("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),s(2),u(n.cx("box")),l("pBind",n.ptm("box")),x("data-p",n.dataP),s(),l("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),s(),l("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",ve(22,mn,n.checked,n.cx("icon"),n.dataP)))},dependencies:[U,Ce,me,H,N,nt,Ct,Y,y],encapsulation:2,changeDetection:0})}return t})(),Lr=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[Ee,N,N]})}return t})();var wn=["data-p-icon","chevron-right"],St=(()=>{class t extends he{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[E],attrs:wn,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(o,n){o&1&&(D(),ce(0,"path",0))},encapsulation:2})}return t})();var In=["data-p-icon","chevron-up"],Ur=(()=>{class t extends he{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["","data-p-icon","chevron-up"]],features:[E],attrs:In,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(o,n){o&1&&(D(),ce(0,"path",0))},encapsulation:2})}return t})();var wt=`
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
        position: relative;
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node-content[data-p-dragging] {
        outline: 1px dashed dt('primary.color');
        outline-offset: -1px;
    }

    .p-tree-node-content[data-pc-section="drag-image"] {
        background: dt('tree.background');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-content.p-tree-node-dragover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content:focus-visible,
    .p-tree-node-content.p-tree-node-contextmenu-selected {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-drop-point {
		outline: 1px solid dt('primary.color');
	}

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`;var Dt=t=>({height:t}),En=(t,a)=>({$implicit:t,loading:a}),Mn=(t,a,e)=>({$implicit:t,partialSelected:a,class:e}),Bt=t=>({$implicit:t}),Dn=()=>({next:!0});function Bn(t,a){if(t&1&&k(0,"div",9),t&2){let e=d(2);u(e.cx("dropPoint")),l("pBind",e.getPTOptions("dropPoint")),x("aria-hidden",!0)}}function Vn(t,a){if(t&1&&(D(),k(0,"svg",13)),t&2){let e=d(4);u(e.cx("nodeToggleIcon")),l("pBind",e.getPTOptions("nodeToggleIcon"))}}function Fn(t,a){if(t&1&&(D(),k(0,"svg",14)),t&2){let e=d(4);u(e.cx("nodeToggleIcon")),l("pBind",e.getPTOptions("nodeToggleIcon"))}}function On(t,a){if(t&1&&(O(0),c(1,Vn,1,3,"svg",11)(2,Fn,1,3,"svg",12),L()),t&2){let e=d(3);s(),l("ngIf",!e.node.expanded),s(),l("ngIf",e.node.expanded)}}function Ln(t,a){if(t&1&&(O(0),D(),k(1,"svg",15),L()),t&2){let e=d(3);s(),u(e.cx("nodeToggleIcon")),l("pBind",e.getPTOptions("nodeToggleIcon"))}}function An(t,a){if(t&1&&(O(0),c(1,On,3,2,"ng-container",6)(2,Ln,2,3,"ng-container",6),L()),t&2){let e=d(2);s(),l("ngIf",!e.node.loading),s(),l("ngIf",e.loadingMode==="icon"&&e.node.loading)}}function Pn(t,a){}function zn(t,a){t&1&&c(0,Pn,0,0,"ng-template")}function Rn(t,a){if(t&1&&(f(0,"span",9),c(1,zn,1,0,null,16),_()),t&2){let e=d(2);u(e.cx("nodeToggleIcon")),l("pBind",e.getPTOptions("nodeToggleIcon")),s(),l("ngTemplateOutlet",e.tree.togglerIconTemplate||e.tree._togglerIconTemplate)("ngTemplateOutletContext",ye(5,En,e.node.expanded,e.node.loading))}}function Hn(t,a){}function Un(t,a){t&1&&c(0,Hn,0,0,"ng-template")}function $n(t,a){if(t&1&&c(0,Un,1,0,null,16),t&2){let e=d(4);l("ngTemplateOutlet",e.tree.checkboxIconTemplate||e.tree._checkboxIconTemplate)("ngTemplateOutletContext",ve(2,Mn,e.isSelected(),e.node.partialSelected,e.cx("nodeCheckbox")))}}function Qn(t,a){t&1&&(O(0),c(1,$n,1,6,"ng-template",null,0,le),L())}function qn(t,a){if(t&1&&(f(0,"p-checkbox",17),M("click",function(o){return o.preventDefault()}),c(1,Qn,3,0,"ng-container",6),_()),t&2){let e=d(2);l("ngModel",e.isSelected())("styleClass",e.cx("nodeCheckbox"))("binary",!0)("indeterminate",e.node.partialSelected)("disabled",e.node.selectable===!1)("variant",(e.tree==null?null:e.tree.config.inputStyle())==="filled"||(e.tree==null?null:e.tree.config.inputVariant())==="filled"?"filled":"outlined")("tabindex",-1)("pt",e.getPTOptions("pcNodeCheckbox"))("unstyled",e.unstyled()),x("data-p-partialchecked",e.node.partialSelected),s(),l("ngIf",e.tree.checkboxIconTemplate||e.tree._checkboxIconTemplate)}}function jn(t,a){if(t&1&&k(0,"span",9),t&2){let e=d(2);u(e.getIcon()),l("pBind",e.getPTOptions("nodeIcon"))}}function Kn(t,a){if(t&1&&(f(0,"span"),fe(1),_()),t&2){let e=d(2);s(),xe(e.node.label)}}function Gn(t,a){t&1&&A(0)}function Wn(t,a){if(t&1&&(f(0,"span"),c(1,Gn,1,0,"ng-container",16),_()),t&2){let e=d(2);s(),l("ngTemplateOutlet",e.tree.getTemplateForNode(e.node))("ngTemplateOutletContext",R(2,Bt,e.node))}}function Xn(t,a){if(t&1&&k(0,"div",9),t&2){let e=d(2);u(e.cx("dropPoint",je(4,Dn))),l("pBind",e.getPTOptions("dropPoint")),x("aria-hidden",!0)}}function Yn(t,a){if(t&1&&k(0,"p-treeNode",20),t&2){let e=a.$implicit,o=a.first,n=a.last,i=a.index,r=d(3);l("node",e)("parentNode",r.node)("firstChild",o)("lastChild",n)("index",i)("itemSize",r.itemSize)("level",r.level+1)("loadingMode",r.loadingMode)("pt",r.pt)("unstyled",r.unstyled())}}function Zn(t,a){if(t&1&&(f(0,"ul",18),c(1,Yn,1,10,"p-treeNode",19),_()),t&2){let e=d(2);u(e.cx("nodeChildren")),l("pBind",e.ptm("nodeChildren")),s(),l("ngForOf",e.node.children)("ngForTrackBy",e.tree.trackBy.bind(e))}}function Jn(t,a){if(t&1){let e=pe();f(0,"li",2),M("keydown",function(n){S(e);let i=d();return w(i.onKeyDown(n))}),V(1,Bn,1,4,"div",3),f(2,"div",4),M("click",function(n){S(e);let i=d();return w(i.onNodeClick(n))})("contextmenu",function(n){S(e);let i=d();return w(i.onNodeRightClick(n))})("dblclick",function(n){S(e);let i=d();return w(i.onNodeDblClick(n))})("touchend",function(){S(e);let n=d();return w(n.onNodeTouchEnd())})("drop",function(n){S(e);let i=d();return w(i.onNodeDrop(n))})("dragstart",function(n){S(e);let i=d();return w(i.onNodeDragStart(n))})("dragover",function(n){S(e);let i=d();return w(i.onNodeDragOver(n))})("dragleave",function(n){S(e);let i=d();return w(i.onNodeDragLeave(n))})("dragend",function(n){S(e);let i=d();return w(i.onNodeDragEnd(n))}),f(3,"button",5),M("click",function(n){S(e);let i=d();return w(i.toggle(n))}),c(4,An,3,2,"ng-container",6)(5,Rn,2,8,"span",7),_(),c(6,qn,2,11,"p-checkbox",8)(7,jn,1,3,"span",7),f(8,"span",9),c(9,Kn,2,1,"span",6)(10,Wn,2,4,"span",6),_()(),V(11,Xn,1,5,"div",3),c(12,Zn,2,5,"ul",10),_()}if(t&2){let e=d();ne(e.node.style),u(e.cn(e.cx("node"),e.node.styleClass)),l("ngStyle",R(36,Dt,e.itemSize+"px"))("pBind",e.getPTOptions("node")),x("aria-label",e.node.label)("aria-checked",e.checked)("aria-setsize",e.node.children?e.node.children.length:0)("aria-selected",e.selected)("aria-expanded",e.node.expanded)("aria-posinset",e.index+1)("aria-level",e.level+1)("tabindex",e.index===0?0:-1)("data-id",e.node.key),s(),F(e.isPrevDropPointActive()?1:-1),s(),u(e.cx("nodeContent")),Be("padding-left",e.level*e.indentation+"rem"),l("draggable",e.tree.draggableNodes)("pBind",e.getPTOptions("nodeContent")),s(),u(e.cx("nodeToggleButton")),l("pBind",e.getPTOptions("nodeToggleButton")),s(),l("ngIf",!e.tree.togglerIconTemplate&&!e.tree._togglerIconTemplate),s(),l("ngIf",e.tree.togglerIconTemplate||e.tree._togglerIconTemplate),s(),l("ngIf",e.tree.selectionMode=="checkbox"),s(),l("ngIf",e.node.icon||e.node.expandedIcon||e.node.collapsedIcon),s(),u(e.cx("nodeLabel")),l("pBind",e.getPTOptions("nodeLabel")),s(),l("ngIf",!e.tree.getTemplateForNode(e.node)),s(),l("ngIf",e.tree.getTemplateForNode(e.node)),s(),F(e.isNextDropPointActive()?11:-1),s(),l("ngIf",!e.tree.virtualScroll&&e.node.children&&e.node.expanded)}}var It=["filter"],eo=["node"],to=["header"],no=["footer"],oo=["loader"],io=["empty"],ro=["togglericon"],lo=["checkboxicon"],ao=["loadingicon"],so=["filtericon"],co=["scroller"],po=["wrapper"],uo=["content"],go=t=>({options:t});function ho(t,a){if(t&1&&k(0,"i",11),t&2){let e=d(2);u(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon)),l("pBind",e.ptm("loadingIcon"))}}function fo(t,a){if(t&1&&(D(),k(0,"svg",13)),t&2){let e=d(3);u(e.cx("loadingIcon")),l("pBind",e.ptm("loadingIcon"))}}function mo(t,a){}function bo(t,a){t&1&&c(0,mo,0,0,"ng-template")}function _o(t,a){if(t&1&&(f(0,"span",11),c(1,bo,1,0,null,8),_()),t&2){let e=d(3);u(e.cx("loadingIcon")),l("pBind",e.ptm("loadingIcon")),s(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function xo(t,a){if(t&1&&(O(0),c(1,fo,1,3,"svg",12)(2,_o,2,4,"span",7),L()),t&2){let e=d(2);s(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function yo(t,a){if(t&1&&(f(0,"div",11),Ue("p-overlay-mask-leave-active"),He("p-overlay-mask-enter-active"),c(1,ho,1,3,"i",7)(2,xo,3,2,"ng-container",10),_()),t&2){let e=d();u(e.cx("mask")),l("pBind",e.ptm("mask")),s(),l("ngIf",e.loadingIcon),s(),l("ngIf",!e.loadingIcon)}}function vo(t,a){t&1&&A(0)}function Co(t,a){t&1&&A(0)}function To(t,a){if(t&1&&c(0,Co,1,0,"ng-container",14),t&2){let e=d();l("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",R(2,Bt,e.filterOptions))}}function ko(t,a){if(t&1&&(D(),k(0,"svg",19)),t&2){let e=d(3);u(e.cx("filterIcon")),l("pBind",e.ptm("filterIcon"))}}function No(t,a){}function So(t,a){t&1&&c(0,No,0,0,"ng-template")}function wo(t,a){if(t&1&&(f(0,"span",11),c(1,So,1,0,null,8),_()),t&2){let e=d(3);u(e.cx("filterIcon")),l("pBind",e.ptm("filterIcon")),s(),l("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function Io(t,a){if(t&1){let e=pe();f(0,"p-iconfield",16)(1,"input",17,0),M("keydown.enter",function(n){return n.preventDefault()})("input",function(n){S(e);let i=d(2);return w(i._filter(n.target==null?null:n.target.value))}),_(),f(3,"p-inputicon",16),c(4,ko,1,3,"svg",18)(5,wo,2,4,"span",7),_()()}if(t&2){let e=d(2);u(e.cx("pcFilterContainer")),l("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),s(),u(e.cx("pcFilterInput")),l("pAutoFocus",e.filterInputAutoFocus)("pt",e.ptm("pcFilterInput"))("unstyled",e.unstyled()),x("placeholder",e.filterPlaceholder),s(2),l("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),s(),l("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),s(),l("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Eo(t,a){if(t&1&&c(0,Io,6,14,"p-iconfield",15),t&2){let e=d();l("ngIf",e.filter)}}function Mo(t,a){if(t&1&&k(0,"p-treeNode",25,3),t&2){let e=a.$implicit,o=a.first,n=a.last,i=a.index,r=d(2).options,p=d(3);l("level",e.level)("rowNode",e)("node",e.node)("parentNode",e.parent)("firstChild",o)("lastChild",n)("index",p.getIndex(r,i))("itemSize",r.itemSize)("indentation",p.indentation)("loadingMode",p.loadingMode)("pt",p.pt)("unstyled",p.unstyled())}}function Do(t,a){if(t&1&&(f(0,"ul",23,2),c(2,Mo,2,12,"p-treeNode",24),_()),t&2){let e=d(),o=e.$implicit,n=e.options,i=d(3);ne(n.contentStyle),u(i.cx("rootChildren")),l("ngClass",n.contentStyleClass)("pBind",i.ptm("rootChildren")),x("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),s(2),l("ngForOf",o)("ngForTrackBy",i.trackBy)}}function Bo(t,a){if(t&1&&c(0,Do,3,10,"ul",22),t&2){let e=a.$implicit;l("ngIf",e)}}function Vo(t,a){t&1&&A(0)}function Fo(t,a){if(t&1&&c(0,Vo,1,0,"ng-container",14),t&2){let e=a.options,o=d(4);l("ngTemplateOutlet",o.loaderTemplate||o._loaderTemplate)("ngTemplateOutletContext",R(2,go,e))}}function Oo(t,a){t&1&&(O(0),c(1,Fo,1,4,"ng-template",null,4,le),L())}function Lo(t,a){if(t&1){let e=pe();f(0,"p-scroller",21,1),M("onScroll",function(n){S(e);let i=d(2);return w(i.onScroll.emit(n))})("onScrollIndexChange",function(n){S(e);let i=d(2);return w(i.onScrollIndexChange.emit(n))})("onLazyLoad",function(n){S(e);let i=d(2);return w(i.onLazyLoad.emit(n))}),c(2,Bo,1,1,"ng-template",null,2,le)(4,Oo,3,0,"ng-container",10),_()}if(t&2){let e=d(2);ne(R(12,Dt,e.scrollHeight!=="flex"?e.scrollHeight:void 0)),l("items",e.serializedValue)("tabindex",-1)("styleClass",e.cx("wrapper"))("scrollHeight",e.scrollHeight!=="flex"?void 0:"100%")("itemSize",e.virtualScrollItemSize)("lazy",e.lazy)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller")),x("data-p",e.wrapperDataP),s(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Ao(t,a){if(t&1&&k(0,"p-treeNode",29),t&2){let e=a.$implicit,o=a.first,n=a.last,i=a.index,r=d(4);l("node",e)("firstChild",o)("lastChild",n)("index",i)("level",0)("loadingMode",r.loadingMode)("pt",r.pt)("unstyled",r.unstyled())}}function Po(t,a){if(t&1&&(f(0,"ul",27,2),c(2,Ao,1,8,"p-treeNode",28),_()),t&2){let e=d(3);u(e.cx("rootChildren")),l("pBind",e.ptm("rootChildren")),x("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy),s(2),l("ngForOf",e.getRootNode())("ngForTrackBy",e.trackBy.bind(e))}}function zo(t,a){if(t&1&&(O(0),f(1,"div",11,5),c(3,Po,3,7,"ul",26),_(),L()),t&2){let e=d(2);s(),u(e.cx("wrapper")),Be("max-height",e.scrollHeight),l("pBind",e.ptm("wrapper")),x("data-p",e.wrapperDataP),s(2),l("ngIf",e.getRootNode())}}function Ro(t,a){if(t&1&&(O(0),c(1,Lo,5,14,"p-scroller",20)(2,zo,4,7,"ng-container",10),L()),t&2){let e=d();s(),l("ngIf",e.virtualScroll),s(),l("ngIf",!e.virtualScroll)}}function Ho(t,a){if(t&1&&(O(0),fe(1),L()),t&2){let e=d(2);s(),qe(" ",e.emptyMessageLabel," ")}}function Uo(t,a){}function $o(t,a){t&1&&c(0,Uo,0,0,"ng-template",null,6,le)}function Qo(t,a){if(t&1&&(f(0,"div",11),c(1,Ho,2,1,"ng-container",30)(2,$o,2,0,null,8),_()),t&2){let e=d();u(e.cx("emptyMessage")),l("pBind",e.ptm("emptyMessage")),s(),l("ngIf",!e.emptyTemplate&&!e._emptyTemplate)("ngIfElse",e.emptyFilter),s(),l("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function qo(t,a){t&1&&A(0)}var jo={root:({instance:t})=>["p-tree p-component",{"p-tree-selectable":t.selectionMode!=null,"p-tree-loading":t.loading,"p-tree-flex-scrollable":t.scrollHeight==="flex","p-tree-node-dragover":t.dragHover}],mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:({instance:t})=>({"p-tree-node":!0,"p-tree-node-leaf":t.isLeaf()}),nodeContent:({instance:t})=>({"p-tree-node-content":!0,"p-tree-node-selectable":t.selectable,"p-tree-node-dragover":t.isNodeDropActive(),"p-tree-node-selected":t.selectionMode==="checkbox"&&t.tree.highlightOnSelect?t.checked:t.selected,"p-tree-node-contextmenu-selected":t.isContextMenuSelected()}),nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children",emptyMessage:"p-tree-empty-message",dropPoint:"p-tree-node-drop-point"},Me=(()=>{class t extends X{name="tree";style=wt;classes=jo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var Et=new P("TREE_INSTANCE"),Mt=new P("TREENODE_INSTANCE"),Ko=(()=>{class t extends Ae{$pcTreeNode=v(Mt,{optional:!0,skipSelf:!0})??void 0;static ICON_CLASS="p-tree-node-icon ";rowNode;node;parentNode;root;index;firstChild;lastChild;level;indentation;itemSize;loadingMode;tree=v(Q(()=>Vt));timeout;isPrevDropPointHovered=se(!1);isNextDropPointHovered=se(!1);isNodeDropHovered=se(!1);isPrevDropPointActive=ee(()=>this.isPrevDropPointHovered()&&this.isDroppable());isNextDropPointActive=ee(()=>this.isNextDropPointHovered()&&this.isDroppable());isNodeDropActive=ee(()=>this.isNodeDropHovered()&&this.isNodeDroppable());dropPosition=ee(()=>this.isPrevDropPointActive()?-1:this.isNextDropPointActive()?1:0);_componentStyle=v(Me);_selected=ee(()=>(this.tree.selection(),this.tree.isSelected(this.node)));_contextMenuSelected=ee(()=>{let e=this.tree.contextMenuSelection();return!e||!this.node?!1:e===this.node||e.key&&e.key===this.node.key});get selected(){return this.tree.selectionMode==="single"||this.tree.selectionMode==="multiple"?this._selected():void 0}get checked(){return this.tree.selectionMode==="checkbox"?this._selected():void 0}get nodeClass(){return this.tree._componentStyle.classes.node({instance:this})}get selectable(){return this.node?.selectable===!1?!1:this.tree?.selectionMode!=null}get subNodes(){return this.node?.parent?this.node.parent.children:this.tree.value}getPTOptions(e){return this.ptm(e,{context:{node:this.node,index:this.index,expanded:this.node?.expanded,selected:this.selected,checked:this.checked,partialChecked:this.node?.partialSelected,leaf:this.isLeaf()}})}onInit(){this.node.parent=this.parentNode;let o=this.tree.el.nativeElement.closest("p-dialog");this.parentNode&&!o&&(this.setAllNodesTabIndexes(),this.tree.syncNodeOption(this.node,this.tree.value,"parent",this.tree.getNodeWithKey(this.parentNode.key,this.tree.value)))}getIcon(){let e;return this.node.icon?e=this.node.icon:e=this.node.expanded&&this.node.children&&this.node.children?.length?this.node.expandedIcon:this.node.collapsedIcon,t.ICON_CLASS+" "+e+" p-tree-node-icon"}isLeaf(){return this.tree.isNodeLeaf(this.node)}isSelected(){return this._selected()}isContextMenuSelected(){return this._contextMenuSelected()}isSameNode(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[role="treeitem"]')))}isDraggable(){return this.tree.draggableNodes}isDroppable(){return this.tree.droppableNodes&&this.tree.allowDrop(this.tree.dragNode,this.node,this.tree.dragNodeScope)}isNodeDroppable(){return this.node?.droppable!==!1&&this.isDroppable()}isNodeDraggable(){return this.node?.draggable!==!1&&this.isDraggable()}toggle(e){this.node.expanded?this.collapse(e):this.expand(e),e.stopPropagation()}expand(e){this.node.expanded=!0,this.tree.virtualScroll&&(this.tree.updateSerializedValue(),this.focusVirtualNode()),this.tree.onNodeExpand.emit({originalEvent:e,node:this.node})}collapse(e){this.node.expanded=!1,this.tree.virtualScroll&&this.tree.updateSerializedValue(),this.tree.onNodeCollapse.emit({originalEvent:e,node:this.node}),this.focusVirtualNode()}onNodeClick(e){this.tree.onNodeClick(e,this.node)}onNodeKeydown(e){e.key==="Enter"&&this.tree.onNodeClick(e,this.node)}onNodeTouchEnd(){this.tree.onNodeTouchEnd()}onNodeRightClick(e){this.tree.onNodeRightClick(e,this.node)}onNodeDblClick(e){this.tree.onNodeDblClick(e,this.node)}insertNodeOnDrop(){let{dragNode:e,dragNodeIndex:o,dragNodeSubNodes:n}=this.tree;if(!this.node||o==null||!e||!n)return;let i=this.dropPosition(),r=this.subNodes||[],p=this.index||0,h=n===r?o>p?p:p-1:p;n.splice(o,1),i<0?r.splice(h,0,e):i>0?r.splice(h+1,0,e):(this.node.children=this.node.children||[],this.node.children.push(e)),this.tree.dragDropService.stopDrag({node:e,subNodes:r,index:o})}onNodeDrop(e){if(e.preventDefault(),e.stopPropagation(),this.isDroppable()){let{dragNode:o}=this.tree,n=this.dropPosition();(n!==0||n===0&&this.isNodeDroppable())&&(this.tree.validateDrop?this.tree.onNodeDrop.emit({originalEvent:e,dragNode:o,dropNode:this.node,index:this.index,accept:()=>{this.insertNodeOnDrop()}}):(this.insertNodeOnDrop(),this.tree.onNodeDrop.emit({originalEvent:e,dragNode:o,dropNode:this.node,index:this.index})))}this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1)}onNodeDragStart(e){if(this.isNodeDraggable()){e.dataTransfer.effectAllowed="all",e.dataTransfer?.setData("text","data");let o=e.currentTarget,n=o.cloneNode(!0),i=n.querySelector('[data-pc-section="nodetogglebutton"]'),r=n.querySelector('[data-pc-name="pcnodecheckbox"]');o.setAttribute("data-p-dragging","true"),n.style.width=We(o)+"px",n.style.height=Ze(o)+"px",n.setAttribute("data-pc-section","drag-image"),i.style.visibility="hidden",r?.remove(),document.body.appendChild(n),e.dataTransfer?.setDragImage(n,0,0),setTimeout(()=>document.body.removeChild(n),0),this.tree.dragDropService.startDrag({tree:this,node:this.node,subNodes:this.subNodes,index:this.index,scope:this.tree.draggableScope})}else e.preventDefault()}onNodeDragOver(e){if(this.isDroppable()){e.dataTransfer.dropEffect="copy";let n=e.currentTarget.getBoundingClientRect(),i=e.clientY-parseInt(n.top);this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1),i<n.height*.25?this.isPrevDropPointHovered.set(!0):i>n.height*.75?this.isNextDropPointHovered.set(!0):this.isNodeDroppable()&&this.isNodeDropHovered.set(!0)}else e.dataTransfer.dropEffect="none";this.tree.droppableNodes&&(e.preventDefault(),e.stopPropagation())}onNodeDragLeave(){this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1)}onNodeDragEnd(e){e.currentTarget?.removeAttribute("data-p-dragging"),this.tree.dragDropService.stopDrag({node:this.node,subNodes:this.subNodes,index:this.index})}onKeyDown(e){if(!(!this.isSameNode(e)||this.tree.contextMenu&&this.tree.contextMenu.containerViewChild?.nativeElement.style.display==="block"))switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowRight":this.onArrowRight(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnter(e);break;case"Tab":this.setAllNodesTabIndexes();break;default:break}}onArrowUp(e){let o=e.target.getAttribute("data-pc-section")==="nodetogglebutton"?e.target.closest('[role="treeitem"]'):e.target.parentElement;if(o?.previousElementSibling)this.focusRowChange(o,o.previousElementSibling,this.findLastVisibleDescendant(o.previousElementSibling));else{let n=this.getParentNodeElement(o);n&&this.focusRowChange(o,n)}e.preventDefault()}onArrowDown(e){let o=e.target.getAttribute("data-pc-section")==="nodetogglebutton"?e.target.closest('[role="treeitem"]'):e.target,n=o?.children[1];if(n&&n.children.length>0)this.focusRowChange(o,n.children[0]);else if(o?.parentElement?.nextElementSibling)this.focusRowChange(o,o.parentElement.nextElementSibling);else{let i=this.findNextSiblingOfAncestor(o?.parentElement);i&&this.focusRowChange(o,i)}e.preventDefault()}onArrowRight(e){!this.node?.expanded&&!this.tree.isNodeLeaf(this.node)&&(this.expand(e),e.currentTarget.tabIndex=-1,setTimeout(()=>{this.onArrowDown(e)},1)),e.preventDefault()}onArrowLeft(e){let o=e.target.getAttribute("data-pc-section")==="nodetogglebutton"?e.target.closest('[role="treeitem"]'):e.target;if(this.level===0&&!this.node?.expanded)return!1;if(this.node?.expanded){this.collapse(e);return}let n=this.getParentNodeElement(o?.parentElement);n&&this.focusRowChange(e.currentTarget,n),e.preventDefault()}onEnter(e){this.tree.onNodeClick(e,this.node),this.setTabIndexForSelectionMode(e,this.tree.nodeTouched),e.preventDefault()}setAllNodesTabIndexes(){let e=Le(this.tree.el.nativeElement,'[data-pc-section="node"]'),o=[...e].some(n=>n.getAttribute("aria-selected")==="true"||n.getAttribute("aria-checked")==="true");if([...e].forEach(n=>{n.tabIndex=-1}),o){let n=[...e].filter(i=>i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true");n[0].tabIndex=0;return}e.length&&([...e][0].tabIndex=0)}setTabIndexForSelectionMode(e,o){if(this.tree.selectionMode!==null){let n=[...Le(this.tree.el.nativeElement,'[role="treeitem"]')];e.currentTarget.tabIndex=o===!1?-1:0,n.every(i=>i.tabIndex===-1)&&(n[0].tabIndex=0)}}findNextSiblingOfAncestor(e){let o=this.getParentNodeElement(e);return o?o.nextElementSibling?o.nextElementSibling:this.findNextSiblingOfAncestor(o):null}findLastVisibleDescendant(e){let n=Array.from(e.children).find(i=>i.getAttribute("data-pc-section")==="node")?.children[1];if(n&&n.children.length>0){let i=n.children[n.children.length-1];return this.findLastVisibleDescendant(i)}else return e}getParentNodeElement(e){let o=e.parentElement?.parentElement?.parentElement;return o?.tagName==="P-TREENODE"?o:null}focusNode(e){e.children[0].focus()}focusRowChange(e,o,n){e.tabIndex="-1",o.children[0].tabIndex="0",this.focusNode(n||o)}focusVirtualNode(){this.timeout=setTimeout(()=>{let e=Xe(this.tree?.contentViewChild?.nativeElement,`[data-id="${this.node?.key??this.node?.data}"]`);Ye(e)},1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-treeNode"]],inputs:{rowNode:"rowNode",node:"node",parentNode:"parentNode",root:[2,"root","root",g],index:[2,"index","index",B],firstChild:[2,"firstChild","firstChild",g],lastChild:[2,"lastChild","lastChild",g],level:[2,"level","level",B],indentation:[2,"indentation","indentation",B],itemSize:[2,"itemSize","itemSize",B],loadingMode:"loadingMode"},features:[z([Me,{provide:Mt,useExisting:t},{provide:$,useExisting:t}]),E],decls:1,vars:1,consts:[["icon",""],["role","treeitem",3,"class","ngStyle","style","pBind"],["role","treeitem",3,"keydown","ngStyle","pBind"],[3,"class","pBind"],[3,"click","contextmenu","dblclick","touchend","drop","dragstart","dragover","dragleave","dragend","draggable","pBind"],["type","button","pRipple","","tabindex","-1",3,"click","pBind"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"ngModel","styleClass","binary","indeterminate","disabled","variant","tabindex","pt","unstyled","click",4,"ngIf"],[3,"pBind"],["role","group",3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-right",3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["data-p-icon","chevron-down",3,"pBind"],["data-p-icon","spinner","spin","",3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"click","ngModel","styleClass","binary","indeterminate","disabled","variant","tabindex","pt","unstyled"],["role","group",3,"pBind"],[3,"node","parentNode","firstChild","lastChild","index","itemSize","level","loadingMode","pt","unstyled",4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","parentNode","firstChild","lastChild","index","itemSize","level","loadingMode","pt","unstyled"]],template:function(o,n){o&1&&V(0,Jn,13,38,"li",1),o&2&&F(n.node?0:-1)},dependencies:[t,U,Fe,me,H,Ke,Ne,Ee,be,Te,ke,St,ot,Pe,N,Y,y],encapsulation:2,changeDetection:0})}return t})(),Vt=(()=>{class t extends Ae{dragDropService;componentName="Tree";bindDirectiveInstance=v(y,{self:!0});$pcTree=v(Et,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;selectionMode;loadingMode="mask";selection=Ve(null);styleClass;contextMenu;contextMenuSelectionMode="joint";contextMenuSelection=Ve(null);draggableScope;droppableScope;draggableNodes;droppableNodes;metaKeySelection=!1;propagateSelectionUp=!0;propagateSelectionDown=!0;loading;loadingIcon;emptyMessage="";ariaLabel;togglerAriaLabel;ariaLabelledBy;validateDrop;filter;filterInputAutoFocus=!1;filterBy="label";filterMode="lenient";filterOptions;filterPlaceholder;filteredNodes;filterLocale;scrollHeight;lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;indentation=1.5;_templateMap;trackBy=(e,o)=>o;highlightOnSelect=!1;onNodeSelect=new C;onNodeUnselect=new C;onNodeExpand=new C;onNodeCollapse=new C;onNodeContextMenuSelect=new C;onNodeDoubleClick=new C;onNodeDrop=new C;onLazyLoad=new C;onScroll=new C;onScrollIndexChange=new C;onFilter=new C;filterTemplate;nodeTemplate;headerTemplate;footerTemplate;loaderTemplate;emptyTemplate;togglerIconTemplate;checkboxIconTemplate;loadingIconTemplate;filterIconTemplate;filterViewChild;scroller;wrapperViewChild;contentViewChild;templates;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_togglerIconTemplate;_checkboxIconTemplate;_loadingIconTemplate;_filterIconTemplate;_filterTemplate;onAfterContentInit(){this.templates.length&&(this._templateMap={}),this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"togglericon":this._togglerIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;default:this._templateMap[e.name]=e.template;break}})}serializedValue;nodeTouched;dragNodeTree;dragNode;dragNodeSubNodes;dragNodeIndex;dragNodeScope;dragHover;dragStartSubscription;dragStopSubscription;_componentStyle=v(Me);handleDropEvent(e){this.onDrop(e)}handleDragOverEvent(e){this.onDragOver(e)}handleDragEnterEvent(){this.onDragEnter()}handleDragLeaveEvent(e){this.onDragLeave(e)}constructor(e){super(),this.dragDropService=e}onInit(){this.filterBy&&(this.filterOptions={filter:e=>this._filter(e),reset:()=>this.resetFilter()}),this.droppableNodes&&(this.dragStartSubscription=this.dragDropService.dragStart$.subscribe(e=>{this.dragNodeTree=e.tree,this.dragNode=e.node,this.dragNodeSubNodes=e.subNodes,this.dragNodeIndex=e.index,this.dragNodeScope=e.scope}),this.dragStopSubscription=this.dragDropService.dragStop$.subscribe(e=>{this.dragNodeTree=null,this.dragNode=null,this.dragNodeSubNodes=null,this.dragNodeIndex=null,this.dragNodeScope=null,this.dragHover=!1}))}onChanges(e){e.value&&(this.updateSerializedValue(),this.hasFilterActive()&&this._filter(this.filterViewChild?.nativeElement?.value))}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Je.EMPTY_MESSAGE)}updateSerializedValue(){this.serializedValue=[],this.serializeNodes(null,this.getRootNode(),0,!0)}serializeNodes(e,o,n,i){if(o&&o.length)for(let r of o){r.parent=e;let p={node:r,parent:e,level:n,visible:i&&(e?e.expanded:!0)};this.serializedValue.push(p),p.visible&&r.expanded&&this.serializeNodes(r,r.children,n+1,p.visible)}}onNodeClick(e,o){let i=e.target?.getAttribute?.("data-pc-section");if(!(i==="nodetogglebutton"||i==="nodetoggleicon")){if(this.selectionMode){if(o.selectable===!1){o.style="--p-focus-ring-color: none;";return}else o.style?.includes("--p-focus-ring-color")||(o.style=o.style?`${o.style}--p-focus-ring-color: var(--primary-color)`:"--p-focus-ring-color: var(--primary-color)");if(this.hasFilteredNodes()&&(o=this.getNodeWithKey(o.key,this.filteredNodes),!o))return;let r=this.findIndexInSelection(o),p=r>=0,h=this.selection();if(this.isCheckboxSelectionMode())p?(this.propagateSelectionDown?this.propagateDown(o,!1):this.selection.set(h.filter((te,re)=>re!=r)),this.propagateSelectionUp&&o.parent&&this.propagateUp(o.parent,!1),this.onNodeUnselect.emit({originalEvent:e,node:o})):(this.propagateSelectionDown?this.propagateDown(o,!0):this.selection.set([...h||[],o]),this.propagateSelectionUp&&o.parent&&this.propagateUp(o.parent,!0),this.onNodeSelect.emit({originalEvent:e,node:o}));else if(this.nodeTouched?!1:this.metaKeySelection){let re=e.metaKey||e.ctrlKey;if(p&&re)this.isSingleSelectionMode()?this.selection.set(null):this.selection.set(h.filter((_e,Ft)=>Ft!=r)),this.onNodeUnselect.emit({originalEvent:e,node:o});else{if(this.isSingleSelectionMode())this.selection.set(o);else if(this.isMultipleSelectionMode()){let _e=re?h||[]:[];this.selection.set([..._e,o])}this.onNodeSelect.emit({originalEvent:e,node:o})}}else this.isSingleSelectionMode()?p?(this.selection.set(null),this.onNodeUnselect.emit({originalEvent:e,node:o})):(this.selection.set(o),setTimeout(()=>{this.onNodeSelect.emit({originalEvent:e,node:o})})):p?(this.selection.set(h.filter((re,_e)=>_e!=r)),this.onNodeUnselect.emit({originalEvent:e,node:o})):(this.selection.set([...h||[],o]),setTimeout(()=>{this.onNodeSelect.emit({originalEvent:e,node:o})}))}this.nodeTouched=!1}}onNodeTouchEnd(){this.nodeTouched=!0}onNodeRightClick(e,o){if(this.contextMenu){let i=e.target.getAttribute("data-pc-section");if(i==="nodetogglebutton"||i==="nodetoggleicon")return;let p=this.findIndexInSelection(o)>=0,h=()=>{this.contextMenu.show(e),this.contextMenu.hideCallback=()=>{this.contextMenuSelection.set(null)},this.onNodeContextMenuSelect.emit({originalEvent:e,node:o})};this.contextMenuSelectionMode==="separate"?(this.contextMenuSelection.set(o),h()):this.contextMenuSelectionMode==="joint"&&(p||(this.isSingleSelectionMode()?this.selection.set(o):this.selection.set([o])),h())}}onNodeDblClick(e,o){this.onNodeDoubleClick.emit({originalEvent:e,node:o})}findIndexInSelection(e){let o=-1,n=this.selection();if(this.selectionMode&&n)if(this.isSingleSelectionMode()){let i=n;o=i.key&&i.key===e.key||i==e?0:-1}else{let i=n;for(let r=0;r<i.length;r++){let p=i[r];if(p.key&&p.key===e.key||p==e){o=r;break}}}return o}syncNodeOption(e,o,n,i){let r=this.hasFilteredNodes()?this.getNodeWithKey(e.key,o):null;r&&(r[n]=i||e[n])}hasFilteredNodes(){return this.filter&&this.filteredNodes&&this.filteredNodes.length}hasFilterActive(){return this.filter&&this.filterViewChild?.nativeElement?.value.length>0}getNodeWithKey(e,o){for(let n of o){if(n.key===e)return n;if(n.children){let i=this.getNodeWithKey(e,n.children);if(i)return i}}}propagateUp(e,o){if(e.children&&e.children.length){let i=0,r=!1;for(let h of e.children)this.isSelected(h)?i++:h.partialSelected&&(r=!0);let p=this.selection()||[];if(o&&i==e.children.length)this.selection.set([...p,e]),e.partialSelected=!1;else{if(!o){let h=this.findIndexInSelection(e);h>=0&&this.selection.set(p.filter((te,re)=>re!=h))}r||i>0&&i!=e.children.length?e.partialSelected=!0:e.partialSelected=!1}this.syncNodeOption(e,this.filteredNodes,"partialSelected")}let n=e.parent;n&&this.propagateUp(n,o)}propagateDown(e,o){let n=this.findIndexInSelection(e),i=this.selection()||[];if(o&&n==-1?this.selection.set([...i,e]):!o&&n>-1&&this.selection.set(i.filter((r,p)=>p!=n)),e.partialSelected=!1,this.syncNodeOption(e,this.filteredNodes,"partialSelected"),e.children&&e.children.length)for(let r of e.children)this.propagateDown(r,o)}isSelected(e){return this.findIndexInSelection(e)!=-1}isSingleSelectionMode(){return this.selectionMode&&this.selectionMode=="single"}isMultipleSelectionMode(){return this.selectionMode&&this.selectionMode=="multiple"}isCheckboxSelectionMode(){return this.selectionMode&&this.selectionMode=="checkbox"}isNodeLeaf(e){return e.leaf==!1?!1:!(e.children&&e.children.length)}getRootNode(){return this.filteredNodes?this.filteredNodes:this.value}getTemplateForNode(e){return this._templateMap?e.type?this._templateMap[e.type]:this._templateMap.default:null}onDragOver(e){this.droppableNodes&&this.allowDrop(this.dragNode,null,this.dragNodeScope)&&(e.dataTransfer.dropEffect="copy",e.preventDefault())}onDrop(e){if(this.droppableNodes){e.preventDefault();let o=this.dragNode;if(this.isSameTreeScope(this.dragNodeScope))return;if(this.allowDrop(o,null,this.dragNodeScope)){let n=this.dragNodeIndex;this.value=this.value||[],this.validateDrop?this.onNodeDrop.emit({originalEvent:e,dragNode:o,dropNode:null,index:n,accept:()=>{this.processTreeDrop(o,n)}}):(this.onNodeDrop.emit({originalEvent:e,dragNode:o,dropNode:null,index:n}),this.processTreeDrop(o,n))}}}processTreeDrop(e,o){this.dragNodeSubNodes.splice(o,1),this.value.push(e),this.dragDropService.stopDrag({node:e})}onDragEnter(){this.droppableNodes&&this.allowDrop(this.dragNode,null,this.dragNodeScope)&&(this.dragHover=!0)}onDragLeave(e){if(this.droppableNodes){let o=e.currentTarget.getBoundingClientRect();(e.x>parseInt(o.left)+o.width||e.x<parseInt(o.left)||e.y>parseInt(o.top)+o.height||e.y<parseInt(o.top))&&(this.dragHover=!1)}}allowDrop(e,o,n){if(e)if(this.isValidDragScope(n)){let i=!0;if(o)if(e===o)i=!1;else{let r=o.parent;for(;r!=null;){if(r===e){i=!1;break}r=r.parent}}return i}else return!1;else return!1}hasCommonScope(e,o){if(typeof o=="string"){if(typeof e=="string")return o===e;if(Array.isArray(e))return e.indexOf(o)!=-1}else if(Array.isArray(o)){if(typeof e=="string")return o.indexOf(e)!=-1;if(Array.isArray(e)){for(let n of o)for(let i of e)if(n===i)return!0}}return!1}isSameTreeScope(e){return this.hasCommonScope(e,this.draggableScope)}isValidDragScope(e){let o=this.droppableScope;return o?this.hasCommonScope(e,o):!0}_filter(e){let o=e;if(o==="")this.filteredNodes=null;else{this.filteredNodes=[];let n=this.filterBy.split(","),i=Oe(o).toLocaleLowerCase(this.filterLocale),r=this.filterMode==="strict";for(let p of this.value){let h=De({},p),te={searchFields:n,filterText:i,isStrictMode:r};(r&&(this.findFilteredNodes(h,te)||this.isFilterMatched(h,te))||!r&&(this.isFilterMatched(h,te)||this.findFilteredNodes(h,te)))&&this.filteredNodes.push(h)}}this.updateSerializedValue(),this.onFilter.emit({filter:o,filteredValue:this.filteredNodes})}resetFilter(){this.filteredNodes=null,this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}scrollToVirtualIndex(e){this.virtualScroll&&this.scroller?.scrollToIndex(e)}scrollTo(e){this.virtualScroll?this.scroller?.scrollTo(e):this.wrapperViewChild&&this.wrapperViewChild.nativeElement&&(this.wrapperViewChild.nativeElement.scrollTo?this.wrapperViewChild.nativeElement.scrollTo(e):(this.wrapperViewChild.nativeElement.scrollLeft=e.left,this.wrapperViewChild.nativeElement.scrollTop=e.top))}findFilteredNodes(e,o){if(e){let n=!1;if(e.children){let i=[...e.children];e.children=[];for(let r of i){let p=De({},r);this.isFilterMatched(p,o)&&(n=!0,e.children.push(p))}}if(n)return e.expanded=!0,!0}}isFilterMatched(e,o){let{searchFields:n,filterText:i,isStrictMode:r}=o,p=!1;for(let h of n)Oe(String(ge(e,h))).toLocaleLowerCase(this.filterLocale).indexOf(i)>-1&&(p=!0);return(!p||r&&!this.isNodeLeaf(e))&&(p=this.findFilteredNodes(e,{searchFields:n,filterText:i,isStrictMode:r})||p),p}getIndex(e,o){let n=e.getItemOptions;return n?n(o).index:o}getBlockableElement(){return this.el.nativeElement.children[0]}onDestroy(){this.dragStartSubscription&&this.dragStartSubscription.unsubscribe(),this.dragStopSubscription&&this.dragStopSubscription.unsubscribe()}get containerDataP(){return this.cn({loading:this.loading,scrollable:this.scrollHeight==="flex"})}get wrapperDataP(){return this.cn({scrollable:this.scrollHeight==="flex"})}static \u0275fac=function(o){return new(o||t)(Re(et,8))};static \u0275cmp=I({type:t,selectors:[["p-tree"]],contentQueries:function(o,n,i){if(o&1&&K(i,It,4)(i,eo,4)(i,to,4)(i,no,4)(i,oo,4)(i,io,4)(i,ro,4)(i,lo,4)(i,ao,4)(i,so,4)(i,W,4),o&2){let r;m(r=b())&&(n.filterTemplate=r.first),m(r=b())&&(n.nodeTemplate=r.first),m(r=b())&&(n.headerTemplate=r.first),m(r=b())&&(n.footerTemplate=r.first),m(r=b())&&(n.loaderTemplate=r.first),m(r=b())&&(n.emptyTemplate=r.first),m(r=b())&&(n.togglerIconTemplate=r.first),m(r=b())&&(n.checkboxIconTemplate=r.first),m(r=b())&&(n.loadingIconTemplate=r.first),m(r=b())&&(n.filterIconTemplate=r.first),m(r=b())&&(n.templates=r)}},viewQuery:function(o,n){if(o&1&&ue(It,5)(co,5)(po,5)(uo,5),o&2){let i;m(i=b())&&(n.filterViewChild=i.first),m(i=b())&&(n.scroller=i.first),m(i=b())&&(n.wrapperViewChild=i.first),m(i=b())&&(n.contentViewChild=i.first)}},hostVars:3,hostBindings:function(o,n){o&1&&M("drop",function(r){return n.handleDropEvent(r)})("dragover",function(r){return n.handleDragOverEvent(r)})("dragenter",function(){return n.handleDragEnterEvent()})("dragleave",function(r){return n.handleDragLeaveEvent(r)}),o&2&&(x("data-p",n.containerDataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",selectionMode:"selectionMode",loadingMode:"loadingMode",selection:[1,"selection"],styleClass:"styleClass",contextMenu:"contextMenu",contextMenuSelectionMode:"contextMenuSelectionMode",contextMenuSelection:[1,"contextMenuSelection"],draggableScope:"draggableScope",droppableScope:"droppableScope",draggableNodes:[2,"draggableNodes","draggableNodes",g],droppableNodes:[2,"droppableNodes","droppableNodes",g],metaKeySelection:[2,"metaKeySelection","metaKeySelection",g],propagateSelectionUp:[2,"propagateSelectionUp","propagateSelectionUp",g],propagateSelectionDown:[2,"propagateSelectionDown","propagateSelectionDown",g],loading:[2,"loading","loading",g],loadingIcon:"loadingIcon",emptyMessage:"emptyMessage",ariaLabel:"ariaLabel",togglerAriaLabel:"togglerAriaLabel",ariaLabelledBy:"ariaLabelledBy",validateDrop:[2,"validateDrop","validateDrop",g],filter:[2,"filter","filter",g],filterInputAutoFocus:[2,"filterInputAutoFocus","filterInputAutoFocus",g],filterBy:"filterBy",filterMode:"filterMode",filterOptions:"filterOptions",filterPlaceholder:"filterPlaceholder",filteredNodes:"filteredNodes",filterLocale:"filterLocale",scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",g],virtualScroll:[2,"virtualScroll","virtualScroll",g],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",B],virtualScrollOptions:"virtualScrollOptions",indentation:[2,"indentation","indentation",B],_templateMap:"_templateMap",trackBy:"trackBy",highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",g]},outputs:{selection:"selectionChange",contextMenuSelection:"contextMenuSelectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onNodeContextMenuSelect:"onNodeContextMenuSelect",onNodeDoubleClick:"onNodeDoubleClick",onNodeDrop:"onNodeDrop",onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange",onFilter:"onFilter"},features:[z([Me,{provide:Et,useExisting:t},{provide:$,useExisting:t}]),j([y]),E],decls:7,vars:6,consts:[["filter",""],["scroller",""],["content",""],["treeNode",""],["loader",""],["wrapper",""],["emptyFilter",""],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"class","pt","unstyled"],[4,"ngIf"],[3,"pBind"],["data-p-icon","spinner","spin","",3,"class","pBind",4,"ngIf"],["data-p-icon","spinner","spin","",3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pt","unstyled",4,"ngIf"],[3,"pt","unstyled"],["pInputText","","type","search","autocomplete","off",3,"keydown.enter","input","pAutoFocus","pt","unstyled"],["data-p-icon","search",3,"class","pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],["hostName","tree",3,"items","tabindex","styleClass","style","scrollHeight","itemSize","lazy","options","pt","onScroll","onScrollIndexChange","onLazyLoad",4,"ngIf"],["hostName","tree",3,"onScroll","onScrollIndexChange","onLazyLoad","items","tabindex","styleClass","scrollHeight","itemSize","lazy","options","pt"],["role","tree",3,"class","ngClass","style","pBind",4,"ngIf"],["role","tree",3,"ngClass","pBind"],[3,"level","rowNode","node","parentNode","firstChild","lastChild","index","itemSize","indentation","loadingMode","pt","unstyled",4,"ngFor","ngForOf","ngForTrackBy"],[3,"level","rowNode","node","parentNode","firstChild","lastChild","index","itemSize","indentation","loadingMode","pt","unstyled"],["role","tree",3,"class","pBind",4,"ngIf"],["role","tree",3,"pBind"],[3,"node","firstChild","lastChild","index","level","loadingMode","pt","unstyled",4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","firstChild","lastChild","index","level","loadingMode","pt","unstyled"],[4,"ngIf","ngIfElse"]],template:function(o,n){if(o&1&&(c(0,yo,3,5,"div",7)(1,vo,1,0,"ng-container",8),V(2,To,1,4,"ng-container")(3,Eo,1,1,"p-iconfield",9),c(4,Ro,3,2,"ng-container",10)(5,Qo,3,6,"div",7)(6,qo,1,0,"ng-container",8)),o&2){let i;l("ngIf",n.loading&&n.loadingMode==="mask"),s(),l("ngTemplateOutlet",n.headerTemplate||n._headerTemplate),s(),F(n.filterTemplate||n._filterTemplate?2:3),s(2),l("ngIf",(i=n.getRootNode())==null?null:i.length),s(),l("ngIf",!n.loading&&(n.getRootNode()==null||n.getRootNode().length===0)),s(),l("ngTemplateOutlet",n.footerTemplate||n._footerTemplate)}},dependencies:[U,Ce,Fe,me,H,st,N,it,Pe,dt,be,lt,at,Ko,rt,Se,y],encapsulation:2,changeDetection:0})}return t})(),Cl=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=J({type:t});static \u0275inj=Z({imports:[Vt,N,N]})}return t})();export{St as a,Ur as b,Ct as c,bt as d,Ai as e,vt as f,dr as g,Ee as h,Lr as i,Vt as j,Cl as k};
