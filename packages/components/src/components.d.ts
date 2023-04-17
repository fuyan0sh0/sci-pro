import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        SciDemo: typeof components.Demo;
    }
}
export { };
