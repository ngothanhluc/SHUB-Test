async function fetchData() {
    try {
        const res = await fetch(
            "https://share.shub.edu.vn/api/intern-test/input",
            {
                method: "GET",
            }
        );
        const data = await res.json();
        console.log("INPUT", data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const sumInRange = (arr, start, end) => {
    return arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
};
const sumInRangeOddEven = (arr, start, end) => {
    return arr
        .slice(start, end + 1)
        .reduce((a, b, i) => (i % 2 === 0 ? a + b : a - b), 0);
};
async function handleData(data) {
    if (data) {
        const result = data?.query?.map((item) => {
            if (item.type === "1") {
                return sumInRange(data.data, item.range[0], item.range[1]);
            } else if (item.type === "2") {
                return sumInRangeOddEven(
                    data.data,
                    item.range[0],
                    item.range[1]
                );
            } else {
                return 0;
            }
        });
        console.log("Output", result);
        try {
            const res = await fetch(
                "https://share.shub.edu.vn/api/intern-test/output",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(result),
                }
            );
            const resJson = await res.json();
            console.log("Response", resJson);
        } catch (error) {
            console.log(error);
            throw error;
        }
    } else {
        console.log("No data");
    }
}
const main = async () => {
    const data = await fetchData();
    handleData(data);
};
main();
