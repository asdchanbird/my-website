function ProjectTab(props) {
    function Change() {
        props.setType(props.title)
    }
    return (
        <span className="text-red-400 m-4 mx-4 font-bold cursor-pointer hover:bg-blue-200 p-1 rounded-xl md:p-2 lg:p-4" onClick={Change}>{props.title}</span>
    )
}


export default ProjectTab;