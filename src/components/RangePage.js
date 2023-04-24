function RangePage() {
    var root = document.querySelector(":root");

    const handleChange = (e) => {
        console.log(e.target.value);
        root.style.setProperty("--main-bg-color", `${e.target.value}`);
    };

    return (
        <>
            <div className="color-part">
                <input type="color" onChange={handleChange} />
            </div>
        </>
    );
}

export default RangePage;
