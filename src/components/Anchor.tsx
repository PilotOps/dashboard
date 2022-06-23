import { type ComponentProps, mergeProps, splitProps, Show } from "solid-js";
import IconArrow from "~icons/fluent/arrow-up-right-24-regular";

export function Anchor(props?: ComponentProps<'a'> & { external?: boolean }) { 
  let mergedProps = mergeProps({
    class: "",
    external: /^(http|mailto)/.test(props.href),
  }, props);

  let [newProps, attrs] = splitProps(mergedProps, ["href", "class", "external"]);
  let mergeAttrs = mergeProps(newProps.external ? { target: "_blank", rel: "noopener" } : {}, attrs);

  return (
    <a
      href={newProps.href}
      class={(newProps.external ? "whitespace-nowrap " : "") + newProps.class}
      custom-anchor
      {...mergeAttrs}
    >
      {mergedProps.children}
      <Show when={newProps.external}>
        <IconArrow astro-icon="fluent:arrow-up-right-24-regular" custom-icon />
      </Show>
    </a>
  );
}

export default Anchor;