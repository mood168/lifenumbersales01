import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@clerk/vue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@clerk/shared/loadClerkJsScript";
import "@clerk/vue/internal";
import "tailwind-merge";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "palm-world",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const items = [
      { id: 1, title: "夫妻關係" },
      { id: 2, title: "人際交往" },
      { id: 3, title: "適合職業" },
      { id: 4, title: "職場交際" },
      { id: 5, title: "客戶個性" },
      { id: 6, title: "車牌號碼" },
      { id: 7, title: "幸運顏色" },
      { id: 8, title: "適合珠寶" },
      { id: 9, title: "1號人格" },
      { id: 10, title: "2號人格" },
      { id: 11, title: "3號人格" },
      { id: 12, title: "4號人格" },
      { id: 13, title: "5號人格" },
      { id: 14, title: "6號人格" },
      { id: 15, title: "7號人格" },
      { id: 16, title: "8號人格" },
      { id: 17, title: "9號人格" }
    ];
    const filteredItems = computed(() => {
      if (!searchQuery.value) return items;
      return items.filter(
        (item) => item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const backgroundStyle = {
      backgroundImage: "url(/images/background.jpg)"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen bg-cover bg-center",
        style: backgroundStyle
      }, _attrs))} data-v-e07b5154><div class="h-[50px]" data-v-e07b5154></div><div class="p-4 flex gap-2" data-v-e07b5154><input type="text"${ssrRenderAttr("value", unref(searchQuery))} class="flex-1 rounded-md border-0 px-4 py-2 shadow-sm" placeholder="搜尋..." data-v-e07b5154><button class="bg-gray-700 text-white px-4 py-2 rounded-md" data-v-e07b5154> 搜尋 </button></div><div class="grid grid-cols-3 gap-4 p-4" data-v-e07b5154><!--[-->`);
      ssrRenderList(unref(filteredItems), (item) => {
        _push(`<div class="aspect-square rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 transition-transform cursor-pointer p-4 flex flex-col items-center justify-center text-center" data-v-e07b5154><h3 class="text-white font-medium text-sm sm:text-base" data-v-e07b5154>${ssrInterpolate(item.title)}</h3></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/palm-world.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const palmWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e07b5154"]]);
export {
  palmWorld as default
};
//# sourceMappingURL=palm-world-Ls0Icomy.js.map
