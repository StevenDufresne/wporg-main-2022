(()=>{function e(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c="all";n&&n.length&&(c=n.text().trim().toLowerCase().replace(/[^a-z]/g,"_")),"all"===c&&(c="");const s={search:e,refinement:c};window.history.state&&window.history.state.search===s.search&&window.history.state.refinement===s.refinement||t(e,c),window.history.replaceState(s,document.title,"/search/"+encodeURIComponent(e).replace(/%20/g,"+")+"/"+(c?"?in="+c:""))}function t(e,t){jQuery.post("https://api.wordpress.org/search/1.0/",{term:e,in:t})}window.__gcse={parsetags:"explicit",callback:function(){const e=function(){const e=document.getElementById("gsce-search");e.innerHTML="",google.search.cse.element.render(JSON.parse(e.dataset.config)),google.search.cse.element.getElement("wordpressorg-search").execute(JSON.parse(e.dataset.terms))};"complete"===document.readyState?e():google.setOnLoadCallback((function(){e()}),!0)},searchCallbacks:{web:{starting:(t,n)=>{e(n,jQuery(".gsc-refinementBlock .gsc-tabhActive"))},rendered:(t,n)=>{jQuery(".gsc-refinementBlock .gsc-tabHeader").off("click.refinement, keypress.refinement").on("click.refinement, keypress.refinement",(function(){e(n,jQuery(this))}))}}}},function(){const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=012566942813864066925:bnbfebp99hs";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()})();