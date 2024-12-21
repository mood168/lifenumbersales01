import { _ as __nuxt_component_1, u as useInjectButtonGroup } from "./useButtonGroup-BtWhVQ2p.js";
import { unref, inject, ref, computed, defineComponent, toRef, useSSRContext, mergeProps, isRef } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { defu } from "defu";
import { u as useUI, i as input } from "./selectMenu-CncDvcV_.js";
import { m as mergeConfig, a as appConfig, _ as _export_sfc, l as looseToNumber } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import "./index-DKDr2x3t.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@clerk/vue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@clerk/shared/loadClerkJsScript";
import "@clerk/vue/internal";
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => (inputProps == null ? void 0 : inputProps.id) ?? (formGroup == null ? void 0 : formGroup.inputId.value)),
    name: computed(() => (inputProps == null ? void 0 : inputProps.name) ?? (formGroup == null ? void 0 : formGroup.name.value)),
    size: computed(() => {
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (inputProps == null ? void 0 : inputProps.size) ?? formGroupSize ?? ((_a = config2.default) == null ? void 0 : _a.size);
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value || (value = null);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && ui.value.file.base,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.type === "hidden" ? "hidden" : _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.type === "file" ? _ctx.attrs : { ..._ctx.attrs, value: _ctx.modelValue }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "calculate",
  __ssrInlineRender: true,
  setup(__props) {
    const birthDate = ref("");
    const result = ref(null);
    const fromOthersEyesDescription = ref("");
    const threeCombinationDescription = ref("");
    const gridNumbers = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const getCircleCount = (number) => {
      if (!birthDate.value) return 0;
      let count = 0;
      const dateString = birthDate.value.replace(/-/g, "");
      dateString.split("").forEach((digit) => {
        if (parseInt(digit) === number) count++;
      });
      return count;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center p-8" }, _attrs))} data-v-2e9cd550><div class="w-full max-w-md" data-v-2e9cd550><div class="bg-peach-100 rounded-3xl p-8 backdrop-blur-sm bg-white/20" data-v-2e9cd550><div class="text-center mb-8" data-v-2e9cd550><h1 class="text-2xl font-bold mb-2" data-v-2e9cd550>紫喬問數❤靈運指掌</h1></div><form class="space-y-6" data-v-2e9cd550><div class="relative" data-v-2e9cd550>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(birthDate),
        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
        type: "date",
        placeholder: "年/月/日",
        class: "w-full py-3 px-4 bg-white rounded-lg text-lg",
        required: ""
      }, null, _parent));
      _push(`</div><button type="submit" class="w-full bg-black text-white py-3 px-4 rounded-lg text-lg hover:bg-gray-800 transition-colors" data-v-2e9cd550> 開始計算 </button></form>`);
      if (unref(result)) {
        _push(`<div class="mt-8 space-y-4" data-v-2e9cd550><div class="text-center" data-v-2e9cd550><h2 class="text-3xl font-bold mb-4" data-v-2e9cd550> 您的生命靈數是：${ssrInterpolate(unref(result).number)}</h2><p class="mt-2 text-lg" data-v-2e9cd550>${ssrInterpolate(unref(result).description)}</p></div><div class="mt-8" data-v-2e9cd550><div class="grid grid-cols-3 gap-2" data-v-2e9cd550><!--[-->`);
        ssrRenderList(gridNumbers, (row) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(row, (num) => {
            _push(`<!--[-->`);
            if (num !== null) {
              _push(`<div class="${ssrRenderClass([{
                "border-pink-500": num === unref(result).number,
                "bg-white/30": true
              }, "relative w-20 h-20 border border-gray-300 flex items-center justify-center text-2xl font-bold"])}" data-v-2e9cd550>${ssrInterpolate(num)} `);
              if (getCircleCount(num) > 0) {
                _push(`<div class="absolute inset-0 flex items-center justify-center" data-v-2e9cd550><!--[-->`);
                ssrRenderList(getCircleCount(num), (index) => {
                  _push(`<div class="${ssrRenderClass([{
                    "w-12 h-12": index === 1,
                    "w-16 h-16": index === 2,
                    "w-20 h-20": index === 3
                  }, "absolute border-2 border-current rounded-full"])}" style="${ssrRenderStyle({ zIndex: 20 - index })}" data-v-2e9cd550></div>`);
                });
                _push(`<!--]--></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<div class="w-20 h-20" data-v-2e9cd550></div>`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div></div><div class="space-y-4 mt-8" data-v-2e9cd550><!--[-->`);
        ssrRenderList(unref(result).traits, (trait, index) => {
          _push(`<div class="bg-white/30 backdrop-blur-sm rounded-lg p-4" data-v-2e9cd550><h3 class="font-semibold mb-2" data-v-2e9cd550>${ssrInterpolate(trait.title)}</h3><p class="text-sm" data-v-2e9cd550>${ssrInterpolate(trait.description)}</p></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(fromOthersEyesDescription)) {
          _push(`<div class="mt-8" data-v-2e9cd550><h3 class="text-xl font-bold mb-4" data-v-2e9cd550>其他人眼中的你</h3><p class="text-sm bg-white/30 backdrop-blur-sm rounded-lg p-4" data-v-2e9cd550>${ssrInterpolate(unref(fromOthersEyesDescription))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(threeCombinationDescription)) {
          _push(`<div class="mt-8" data-v-2e9cd550><h3 class="text-xl font-bold mb-4" data-v-2e9cd550>三合數解析</h3><p class="text-sm bg-white/30 backdrop-blur-sm rounded-lg p-4" data-v-2e9cd550>${ssrInterpolate(unref(threeCombinationDescription))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calculate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e9cd550"]]);
export {
  calculate as default
};
//# sourceMappingURL=calculate-C1gsKJnD.js.map
