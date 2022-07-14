import { type ComponentProps, type JSX, onCleanup, onMount, splitProps, mergeProps } from "solid-js";
import IconChevronRightArrow from "~icons/fluent/chevron-right-24-regular";

import { createDetailsEffect } from "../hooks/details";
import { clsx, type ClassValue } from "clsx";

export function Details(props: ComponentProps<'details'> & {
  children?: JSX.Element;
  summary?: JSX.Element;
  summaryAttrs?: ComponentProps<'summary'>;
  contentClass?: ClassValue;
}) {
  let [newProps, attrs] = splitProps(props, ["children", "summary", "summaryAttrs", "contentClass"]);

  let mergedProps = mergeProps({
    summaryAttrs: { class: "px-4 py-2 cursor-pointer select-none" },
    contentClass: "pl-4 pr-2 py-4",
  }, newProps)

  let ref: HTMLDetailsElement;
  let summaryRef: HTMLElement;
  let contentRef: HTMLDivElement;

  let {
    onClick: _onClick,
    onCleanup: _onCleanup,
    onMount: _onMount
  } = createDetailsEffect();

  onMount(() => _onMount(ref, summaryRef, contentRef));
  onCleanup(() => _onCleanup());

  return (
    <details ref={ref} custom-details {...attrs}>
      <summary ref={summaryRef} onClick={_onClick} custom-summary {...mergedProps.summaryAttrs}>
        {mergedProps.summary}
        <IconChevronRightArrow astro-icon="fluent:chevron-right-24-regular" custom-icon="dropdown-icon" />
      </summary>
      <div class={clsx("content", mergedProps.contentClass)} ref={contentRef} custom-content>
        {mergedProps.children}
      </div>
    </details>
  );
}

export default Details;