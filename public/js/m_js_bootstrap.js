if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(n){"use strict";var t=n.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.button"),f="object"==typeof i&&i;r||u.data("bs.button",r=new t(this,f));"toggle"==i?r.toggle():i&&r.setState(i)})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.isLoading=!1},r;t.VERSION="3.3.6";t.DEFAULTS={loadingText:"loading..."};t.prototype.setState=function(t){var r="disabled",i=this.$element,f=i.is("input")?"val":"html",u=i.data();t+="Text";null==u.resetText&&i.data("resetText",i[f]());setTimeout(n.proxy(function(){i[f](null==u[t]?this.options[t]:u[t]);"loadingText"==t?(this.isLoading=!0,i.addClass(r).attr(r,r)):this.isLoading&&(this.isLoading=!1,i.removeClass(r).removeAttr(r))},this),0)};t.prototype.toggle=function(){var t=!0,i=this.$element.closest('[data-toggle="buttons"]'),n;i.length?(n=this.$element.find("input"),"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),i.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")):(this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active"))};r=n.fn.button;n.fn.button=i;n.fn.button.Constructor=t;n.fn.button.noConflict=function(){return n.fn.button=r,this};n(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var r=n(t.target);r.hasClass("btn")||(r=r.closest(".btn"));i.call(r,"toggle");n(t.target).is('input[type="radio"]')||n(t.target).is('input[type="checkbox"]')||t.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){n(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);+function(n){"use strict";function r(t){var i=t.attr("data-target"),r;return i||(i=t.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),r=i&&n(i),r&&r.length?r:t.parent()}function u(t){t&&3===t.which||(n(o).remove(),n(i).each(function(){var u=n(this),i=r(u),f={relatedTarget:this};i.hasClass("open")&&(t&&"click"==t.type&&/input|textarea/i.test(t.target.tagName)&&n.contains(i[0],t.target)||(i.trigger(t=n.Event("hide.bs.dropdown",f)),t.isDefaultPrevented()||(u.attr("aria-expanded","false"),i.removeClass("open").trigger(n.Event("hidden.bs.dropdown",f)))))}))}function e(i){return this.each(function(){var r=n(this),u=r.data("bs.dropdown");u||r.data("bs.dropdown",u=new t(this));"string"==typeof i&&u[i].call(r)})}var o=".dropdown-backdrop",i='[data-toggle="dropdown"]',t=function(t){n(t).on("click.bs.dropdown",this.toggle)},f;t.VERSION="3.3.6";t.prototype.toggle=function(t){var f=n(this),i,o,e;if(!f.is(".disabled, :disabled")){if(i=r(f),o=i.hasClass("open"),u(),!o){if("ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click",u),e={relatedTarget:this},i.trigger(t=n.Event("show.bs.dropdown",e)),t.isDefaultPrevented())return;f.trigger("focus").attr("aria-expanded","true");i.toggleClass("open").trigger(n.Event("shown.bs.dropdown",e))}return!1}};t.prototype.keydown=function(t){var e,o,s,h,f,u;if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)&&(e=n(this),t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled"))){if(o=r(e),s=o.hasClass("open"),!s&&27!=t.which||s&&27==t.which)return 27==t.which&&o.find(i).trigger("focus"),e.trigger("click");h=" li:not(.disabled):visible a";f=o.find(".dropdown-menu"+h);f.length&&(u=f.index(t.target),38==t.which&&u>0&&u--,40==t.which&&u<f.length-1&&u++,~u||(u=0),f.eq(u).trigger("focus"))}};f=n.fn.dropdown;n.fn.dropdown=e;n.fn.dropdown.Constructor=t;n.fn.dropdown.noConflict=function(){return n.fn.dropdown=f,this};n(document).on("click.bs.dropdown.data-api",u).on("click.bs.dropdown.data-api",".dropdown form",function(n){n.stopPropagation()}).on("click.bs.dropdown.data-api",i,t.prototype.toggle).on("keydown.bs.dropdown.data-api",i,t.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",t.prototype.keydown)}(jQuery);+function(n){"use strict";function r(t){var i,r=t.attr("data-target")||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return n(r)}function i(i){return this.each(function(){var u=n(this),r=u.data("bs.collapse"),f=n.extend({},t.DEFAULTS,u.data(),"object"==typeof i&&i);!r&&f.toggle&&/show|hide/.test(i)&&(f.toggle=!1);r||u.data("bs.collapse",r=new t(this,f));"string"==typeof i&&r[i]()})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.$trigger=n('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]');this.transitioning=null;this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger);this.options.toggle&&this.toggle()},u;t.VERSION="3.3.6";t.TRANSITION_DURATION=350;t.DEFAULTS={toggle:!0};t.prototype.dimension=function(){var n=this.$element.hasClass("width");return n?"width":"height"};t.prototype.show=function(){var f,r,e,u,o,s;if(!this.transitioning&&!this.$element.hasClass("in")&&(r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing"),!(r&&r.length&&(f=r.data("bs.collapse"),f&&f.transitioning))&&(e=n.Event("show.bs.collapse"),this.$element.trigger(e),!e.isDefaultPrevented()))){if(r&&r.length&&(i.call(r,"hide"),f||r.data("bs.collapse",null)),u=this.dimension(),this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1,o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[u]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")},!n.support.transition)return o.call(this);s=n.camelCase(["scroll",u].join("-"));this.$element.one("bsTransitionEnd",n.proxy(o,this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])}};t.prototype.hide=function(){var r,i,u;if(!this.transitioning&&this.$element.hasClass("in")&&(r=n.Event("hide.bs.collapse"),this.$element.trigger(r),!r.isDefaultPrevented()))return i=this.dimension(),this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1,u=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")},n.support.transition?void this.$element[i](0).one("bsTransitionEnd",n.proxy(u,this)).emulateTransitionEnd(t.TRANSITION_DURATION):u.call(this)};t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};t.prototype.getParent=function(){return n(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(n.proxy(function(t,i){var u=n(i);this.addAriaAndCollapsedClass(r(u),u)},this)).end()};t.prototype.addAriaAndCollapsedClass=function(n,t){var i=n.hasClass("in");n.attr("aria-expanded",i);t.toggleClass("collapsed",!i).attr("aria-expanded",i)};u=n.fn.collapse;n.fn.collapse=i;n.fn.collapse.Constructor=t;n.fn.collapse.noConflict=function(){return n.fn.collapse=u,this};n(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var u=n(this);u.attr("data-target")||t.preventDefault();var f=r(u),e=f.data("bs.collapse"),o=e?"toggle":u.data();i.call(f,o)})}(jQuery);+function(n){"use strict";function t(){var i=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in n)if(void 0!==i.style[t])return{end:n[t]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,u=this,r;n(this).one("bsTransitionEnd",function(){i=!0});return r=function(){i||n(u).trigger(n.support.transition.end)},setTimeout(r,t),this};n(function(){n.support.transition=t();n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery)