!function(){"use strict";const e=document.querySelector(".header__burger"),t=document.querySelector(".mobile-navigation"),o=document.querySelectorAll(".mobile-navigation__link"),s=document.querySelector("body"),n=document.querySelector(".mob-overlay");e.addEventListener("click",(()=>{e.classList.toggle("open"),t.classList.toggle("is-open"),s.classList.toggle("no_scroll"),n.classList.toggle("hidden__overlay")})),n.addEventListener("click",(()=>{e.classList.toggle("open"),t.classList.toggle("is-open"),s.classList.toggle("no_scroll"),n.classList.toggle("hidden__overlay")})),o.forEach((o=>{o.addEventListener("click",(function(){e.classList.toggle("open"),t.classList.toggle("is-open"),s.classList.toggle("no_scroll"),n.classList.toggle("hidden__overlay")}))}));const l=document.getElementById("go-up");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?l.style.display="block":l.style.display="none"},l.addEventListener("click",(function(){window.scrollTo(0,0)}));const c=document.querySelector(".popup"),i=document.querySelector(".popup__text-sending"),d=document.querySelector(".popup__text-success"),r=document.getElementById("submit"),a=document.querySelector(".submit-overlay"),u=document.querySelector(".popup__ok"),m=document.querySelector(".form__name-input"),g=document.querySelector(".form__email-input"),_=document.querySelector(".form__message-textarea"),L=function(){const e=m.value.trim(),t=g.value.trim(),o=_.value.trim();e&&t&&o?r.removeAttribute("disabled"):r.setAttribute("disabled","disabled")};m.addEventListener("input",L),g.addEventListener("input",L),_.addEventListener("input",L),setTimeout((function(){i.classList.add("hidden"),d.classList.remove("hidden"),u.classList.remove("hidden")}),5e3),u.addEventListener("click",(function(e){a.classList.add("hidden__overlay"),c.classList.add("hidden"),s.classList.remove("no_scroll"),window.location.reload()})),r.addEventListener("click",(function(e){e.preventDefault(),a.classList.remove("hidden__overlay"),c.classList.remove("hidden"),s.classList.add("no_scroll")}))}();