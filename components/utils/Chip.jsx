import { HTMLIcon, CSSIcon, ExpressIcon, JavaScriptIcon, NextJSIcon, NodeJSIcon, ReactIcon, TechIcon } from '../Icons/technologies'

export const Chip = ({ name }) => {
    return (
        <div className="bg-[#172135] flex items-center h-10 gap-2 px-2 rounded-full opacity-70 transition-opacity hover:opacity-100">
            <div className="badge h-7">
                <TechIcon technology={name}/>
            </div>
            <p>{name}</p>
        </div>
    )
}
