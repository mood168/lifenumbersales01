import { _ as __nuxt_component_0 } from "./nuxt-link-ChxAMr8J.js";
import { defineComponent, toRef, computed, useSSRContext, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, renderSlot, createCommentVNode, toDisplayString } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useUI } from "./selectMenu-CncDvcV_.js";
import { m as mergeConfig, a as appConfig, _ as _export_sfc } from "../server.mjs";
import { ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@clerk/vue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@clerk/shared/loadClerkJsScript";
import "@clerk/vue/internal";
import "@iconify/vue";
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const consultItems = [
      {
        title: "夫妻關係",
        description: "了解您與伴侶的相處模式與潛在挑戰",
        path: "/consult/marriage"
      },
      {
        title: "人際交往",
        description: "探索您的社交特質與人際互動模式",
        path: "/consult/social"
      },
      {
        title: "適合職業",
        description: "發掘最適合您的職業方向與發展路徑",
        path: "/consult/career"
      },
      {
        title: "職場交際",
        description: "提升職場人際關係與溝通技巧",
        path: "/consult/workplace"
      },
      {
        title: "客戶個性",
        description: "了解不同數字的客戶特質與應對策略",
        path: "/consult/customer"
      },
      {
        title: "車牌號碼",
        description: "選擇最適合您的幸運車牌號碼",
        path: "/consult/car-number"
      },
      {
        title: "幸運顏色",
        description: "找出能為您帶來好運的顏色",
        path: "/consult/lucky-color"
      },
      {
        title: "適合珠寶",
        description: "選擇最適合您的珠寶飾品",
        path: "/consult/jewelry"
      },
      {
        title: "個性解析",
        description: "深入了解不同生命靈數的性格特質",
        path: "/consult/personality"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen p-8" }, _attrs))} data-v-9dc1bcbe><div class="container mx-auto" data-v-9dc1bcbe><header class="text-center mb-12" data-v-9dc1bcbe><h1 class="text-4xl font-bold text-white mb-4 drop-shadow-lg" data-v-9dc1bcbe>紫喬問數❤靈運指掌</h1><p class="text-xl text-white/90 drop-shadow" data-v-9dc1bcbe>探索您的天賦與潛能</p></header><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-9dc1bcbe><!--[-->`);
      ssrRenderList(consultItems, (item, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index2,
          to: item.path,
          class: "group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UCard, { class: "transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30" }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-xl font-semibold text-white drop-shadow-sm" data-v-9dc1bcbe${_scopeId2}>${ssrInterpolate(item.title)}</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-xl font-semibold text-white drop-shadow-sm" }, toDisplayString(item.title), 1)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-white/90 dark:text-gray-200" data-v-9dc1bcbe${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-white/90 dark:text-gray-200" }, toDisplayString(item.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UCard, { class: "transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30" }, {
                  header: withCtx(() => [
                    createVNode("h3", { class: "text-xl font-semibold text-white drop-shadow-sm" }, toDisplayString(item.title), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("p", { class: "text-white/90 dark:text-gray-200" }, toDisplayString(item.description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dc1bcbe"]]);
export {
  index as default
};
//# sourceMappingURL=index-BsnzfRW7.js.map
