/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Для стандартного импорта
declare module "*.svg" {
	import React from "react";
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	const src: string;
	export default src;
}

// Для импорта с ?react
declare module "*.svg?react" {
	import React from "react";
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	export default ReactComponent;
}

// Для импорта с ?url
declare module "*.svg?url" {
	const src: string;
	export default src;
}
