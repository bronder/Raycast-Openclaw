/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Gateway URL - The URL of your OpenClaw Gateway (e.g., http://127.0.0.1:18789) */
  "gatewayUrl": string,
  /** Auth Token - Bearer token for Gateway authentication (leave empty if auth is disabled) */
  "authToken"?: string,
  /** Agent ID - OpenClaw agent to use (e.g., main, beta) */
  "agentId": string,
  /** Model - Model identifier to send in requests */
  "model": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `chat` command */
  export type Chat = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `chat` command */
  export type Chat = {}
}

