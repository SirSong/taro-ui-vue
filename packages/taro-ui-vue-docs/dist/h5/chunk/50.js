(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"318":function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var c=t(2),r=t(3),o=t(10),i=t(11),n=t(4),l=t(82),N=t.n(l),s=t(23),m=t.n(s),B=t(317),b=(t(319),function(e){Object(o.a)(DocsHeader,e);var a=Object(i.a)(DocsHeader);function DocsHeader(){return Object(c.a)(this,DocsHeader),a.apply(this,arguments)}return Object(r.a)(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return m.a.createElement(B.View,{"className":"doc-header"},m.a.createElement(B.View,{"className":"doc-header__title"},e))}}]),DocsHeader}(m.a.Component));Object(n.a)(b,"defaultProps",void 0),Object(n.a)(b,"propTypes",void 0),b.defaultProps={"title":"标题"},b.propTypes={"title":N.a.string}},"319":function(e,a,t){},"355":function(e,a,t){},"409":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var c=t(2),r=t(3),o=t(18),i=t(10),n=t(11),l=t(4),N=t(23),s=t.n(N),m=t(320),B=t(317),b=t(83),E=t(318),u=(t(355),function(e){Object(i.a)(NoticebarPage,e);var a=Object(n.a)(NoticebarPage);function NoticebarPage(){var e;Object(c.a)(this,NoticebarPage);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),Object(l.a)(Object(o.a)(e),"config",{"navigationBarTitleText":"Taro UI"}),e}return Object(r.a)(NoticebarPage,[{"key":"onGotoMore","value":function onGotoMore(){b.default.getEnv()!==b.default.ENV_TYPE.WEB?Object(b.showModal)({"content":"点击了更多!","cancelText":"取消"}):alert("您点击了更多!")}},{"key":"render","value":function render(){return s.a.createElement(B.View,{"className":"page"},s.a.createElement(E.a,{"title":"NoticeBar 通告栏"}),s.a.createElement(B.View,{"className":"doc-body"},s.a.createElement(B.View,{"className":"panel"},s.a.createElement(B.View,{"className":"panel__title"},"文字"),s.a.createElement(B.View,{"className":"panel__content"},s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,null,"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),s.a.createElement(B.View,{"className":"panel"},s.a.createElement(B.View,{"className":"panel__title"},"跑马灯"),s.a.createElement(B.View,{"className":"panel__content"},s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"marquee":!0},"[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"marquee":!0,"icon":"volume-plus"},"[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"marquee":!0},"[超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")))),s.a.createElement(B.View,{"className":"panel"},s.a.createElement(B.View,{"className":"panel__title"},"图标"),s.a.createElement(B.View,{"className":"panel__content"},s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"icon":"volume-plus"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),s.a.createElement(B.View,{"className":"panel"},s.a.createElement(B.View,{"className":"panel__title"},"查看更多"),s.a.createElement(B.View,{"className":"panel__content"},s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"showMore":!0,"single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"showMore":!0,"icon":"volume-plus","single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"showMore":!0,"moreText":"更多内容","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"showMore":!0,"moreText":"更多内容","icon":"volume-plus","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),s.a.createElement(B.View,{"className":"panel"},s.a.createElement(B.View,{"className":"panel__title"},"关闭按钮"),s.a.createElement(B.View,{"className":"panel__content"},s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0,"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0,"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0,"onGotoMore":this.onGotoMore.bind(this),"single":!0,"showMore":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0,"icon":"volume-plus","showMore":!0,"onGotoMore":this.onGotoMore.bind(this),"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),s.a.createElement(B.View,{"className":"bar-item"},s.a.createElement(m.AtNoticebar,{"close":!0,"icon":"volume-plus"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏"))))))}}]),NoticebarPage}(s.a.Component))}}]);