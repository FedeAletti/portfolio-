import CSSIcon from "./CSS";
import HTMLIcon from "./HTML";
import JavaScriptIcon from "./Javascript";
import TypeScriptIcon from "./Typescript";
import ReactIcon from "./React";
import NodeJSIcon from "./Node";
import ExpressIcon from "./Express";
import NextJSIcon from "./Next";


export const TechIcon = ({ technology }) => {
    const TECHNOLOGIES = [
        {
            name: "HTML",
            SVG: <HTMLIcon />
        },
        {
            name: "CSS",
            SVG: <CSSIcon />
        },
        {
            name: "JavaScript",
            SVG: <JavaScriptIcon />
        },
        {
            name: "TypeScript",
            SVG: <TypeScriptIcon />
        },
        {
            name: "React",
            SVG: <ReactIcon />
        },
        {
            name: "NextJS",
            SVG: <NextJSIcon />
        },
        {
            name: "NodeJS",
            SVG: <NodeJSIcon />
        },
        {
            name: "Express",
            SVG: <ExpressIcon />
        },
    ]

    const matchingSVGs = TECHNOLOGIES.filter(tech => tech.name === technology).map(technology => technology.SVG);

    return matchingSVGs[0];
}
