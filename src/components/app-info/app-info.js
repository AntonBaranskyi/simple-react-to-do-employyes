import "./app-info.css";

const AppInfo = (props) => {
    const {numberOfEmloyyes,increaseNum} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numberOfEmloyyes}</h2>
            <h2>Премию получат: {increaseNum}</h2>
        </div>
    )
}

export default AppInfo;