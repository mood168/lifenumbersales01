import { _ as __nuxt_component_0 } from "./nuxt-link-ChxAMr8J.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useSignIn, useSignUp } from "@clerk/vue";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@clerk/shared/loadClerkJsScript";
import "@clerk/vue/internal";
import "tailwind-merge";
import "@iconify/vue";
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M17.64,9.20454545%20C17.64,8.56636364%2017.5827273,7.95272727%2017.4763636,7.36363636%20L9,7.36363636%20L9,10.845%20L13.8436364,10.845%20C13.635,11.97%2013.0009091,12.9231818%2012.0477273,13.5613636%20L12.0477273,15.8195455%20L14.9563636,15.8195455%20C16.6581818,14.2527273%2017.64,11.9454545%2017.64,9.20454545%20L17.64,9.20454545%20Z'%20fill='%234285F4'%3e%3c/path%3e%3cpath%20d='M9,18%20C11.43,18%2013.4672727,17.1940909%2014.9563636,15.8195455%20L12.0477273,13.5613636%20C11.2418182,14.1013636%2010.2109091,14.4204545%209,14.4204545%20C6.65590909,14.4204545%204.67181818,12.8372727%203.96409091,10.71%20L0.957272727,10.71%20L0.957272727,13.0418182%20C2.43818182,15.9831818%205.48181818,18%209,18%20L9,18%20Z'%20fill='%2334A853'%3e%3c/path%3e%3cpath%20d='M3.96409091,10.71%20C3.78409091,10.17%203.68181818,9.59318182%203.68181818,9%20C3.68181818,8.40681818%203.78409091,7.83%203.96409091,7.29%20L3.96409091,4.95818182%20L0.957272727,4.95818182%20C0.347727273,6.17318182%200,7.54772727%200,9%20C0,10.4522727%200.347727273,11.8268182%200.957272727,13.0418182%20L3.96409091,10.71%20L3.96409091,10.71%20Z'%20fill='%23FBBC05'%3e%3c/path%3e%3cpath%20d='M9,3.57954545%20C10.3213636,3.57954545%2011.5077273,4.03363636%2012.4404545,4.92545455%20L15.0218182,2.34409091%20C13.4631818,0.891818182%2011.4259091,0%209,0%20C5.48181818,0%202.43818182,2.01681818%200.957272727,4.95818182%20L3.96409091,7.29%20C4.67181818,5.16272727%206.65590909,3.57954545%209,3.57954545%20L9,3.57954545%20Z'%20fill='%23EA4335'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const lastName = ref("");
    const emailAddress = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const isLoading = ref(false);
    useSignIn();
    useSignUp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-fff4320d><div class="w-full max-w-md space-y-8" data-v-fff4320d><div class="bg-white rounded-3xl p-8 shadow-lg" data-v-fff4320d><div class="text-center mb-6" data-v-fff4320d><h2 class="text-2xl font-bold text-gray-900" data-v-fff4320d>Create your account</h2><p class="mt-2 text-gray-600" data-v-fff4320d> to continue to Clerk </p></div><div class="space-y-4 mb-6" data-v-fff4320d><button class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" data-v-fff4320d><img${ssrRenderAttr("src", _imports_0)} alt="GitHub" class="w-5 h-5" data-v-fff4320d><span class="text-gray-700" data-v-fff4320d>使用 GitHub 繼續</span></button><button class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" data-v-fff4320d><img${ssrRenderAttr("src", _imports_1)} alt="Google" class="w-5 h-5" data-v-fff4320d><span class="text-gray-700" data-v-fff4320d>使用 Google 繼續</span></button></div><div class="relative my-6" data-v-fff4320d><div class="absolute inset-0 flex items-center" data-v-fff4320d><div class="w-full border-t border-gray-300" data-v-fff4320d></div></div><div class="relative flex justify-center text-sm" data-v-fff4320d><span class="px-2 bg-white text-gray-500" data-v-fff4320d>或</span></div></div><form class="space-y-4" data-v-fff4320d><div class="grid grid-cols-2 gap-4" data-v-fff4320d><div data-v-fff4320d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-fff4320d>名字</label><input type="text"${ssrRenderAttr("value", unref(firstName))} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" data-v-fff4320d></div><div data-v-fff4320d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-fff4320d>姓氏</label><input type="text"${ssrRenderAttr("value", unref(lastName))} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" data-v-fff4320d></div></div><div data-v-fff4320d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-fff4320d>電子郵件</label><input type="email"${ssrRenderAttr("value", unref(emailAddress))} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" data-v-fff4320d></div><div data-v-fff4320d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-fff4320d>密碼</label><div class="relative" data-v-fff4320d><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")}${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(password), null)} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" data-v-fff4320d><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2" data-v-fff4320d><i class="text-gray-400" data-v-fff4320d>${ssrInterpolate(unref(showPassword) ? "👁️" : "👁")}</i></button></div></div><button type="submit"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50" data-v-fff4320d>${ssrInterpolate(unref(isLoading) ? "處理中..." : "繼續")}</button></form><div class="mt-4 text-center" data-v-fff4320d><span class="text-sm text-gray-600" data-v-fff4320d>已經有帳號？</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sign-in",
        class: "text-sm text-purple-600 hover:text-purple-500 ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 登入 `);
          } else {
            return [
              createTextVNode(" 登入 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fff4320d"]]);
export {
  login as default
};
//# sourceMappingURL=login-DRrxAc1q.js.map
