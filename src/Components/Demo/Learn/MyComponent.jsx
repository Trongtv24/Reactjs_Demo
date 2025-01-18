//component = html + css + js

import './styles.css'
const MyComponent = () => {
    // const hoidanit = "eric 1"; //string
    // const hoidanit = 25; //number
    // const hoidanit = true; //boolean
    // const hoidanit = undefined;
    // const hoidanit = null;
    const hoidanit = [1, 2, 3]
    // const hoidanit = {
    //     name: "hoidanit",
    //     age: 25
    // }

    return (
        <>
            <div> chill gay& hoidanit update</div>
            <div> {JSON.stringify(hoidanit)} & hoidanit update</div>
            <div>{console.log("ERIC")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}>Child</div>
        </>
    );
}

export default MyComponent;