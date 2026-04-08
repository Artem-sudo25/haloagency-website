import { getMessages } from "next-intl/server";
import { cache } from "react";

type MessageValue =
  | string
  | number
  | boolean
  | null
  | MessageValue[]
  | { [key: string]: MessageValue };

type MessageTree = { [key: string]: MessageValue };

const getRequestMessages = cache(async () => {
  return (await getMessages()) as MessageTree;
});

function getNestedValue(source: MessageTree, path: string[]) {
  let current: MessageValue | undefined = source;

  for (const segment of path) {
    if (!current || Array.isArray(current) || typeof current !== "object") {
      return undefined;
    }

    current = (current as MessageTree)[segment];
  }

  return current;
}

function setNestedValue(
  target: MessageTree,
  path: string[],
  value: MessageValue,
) {
  let current = target;

  for (const segment of path.slice(0, -1)) {
    const existing = current[segment];

    if (!existing || Array.isArray(existing) || typeof existing !== "object") {
      current[segment] = {};
    }

    current = current[segment] as MessageTree;
  }

  current[path[path.length - 1]] = value;
}

export function pickMessages(
  messages: MessageTree,
  namespaces: readonly string[],
): MessageTree {
  const scopedMessages: MessageTree = {};

  for (const namespace of namespaces) {
    const path = namespace.split(".");
    const value = getNestedValue(messages, path);

    if (value !== undefined) {
      setNestedValue(scopedMessages, path, value);
    }
  }

  return scopedMessages;
}

export async function getScopedMessages(namespaces: readonly string[]) {
  return pickMessages(await getRequestMessages(), namespaces);
}
