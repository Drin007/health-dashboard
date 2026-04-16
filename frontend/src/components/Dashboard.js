import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {

    const [deviceId, setDeviceId] = useState("");

    const [data,setData] = useState([]);
    
    const [loading, setLoading] = useState(false);  

    const fetchData = async () => {

    if (!deviceId) return;

    setLoading(true);

    try {
        const res = await axios.get(
            `https://health-backend-3qyn.onrender.com/api/health-data/${deviceId}` // after deployement of backend i changed this front end url
        );
        setData(res.data);
    } catch (err) {
        console.log(err);
    }

      setLoading(false);
    };

    useEffect(() => {

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
}, [deviceId]);

    return (
        <div style={{ border: " solid #ccc",fontWeight: "bold",fontSize: "20px",  margin: "10px", padding: "15px",borderRadius: "8px",background: "#7b7b7b"
}}>
            <input
                style={{fontWeight : "bold", color : "grey", width: "300px",height: "40px",fontSize: "16px", }}
                placeholder="Enter deviceId"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)} 
            />

            <button onClick={fetchData} style = {{width: "300px",height: "40px", fontSize: "16px", fontWeight: "bold", }}> Fetch all the readings </button>

            {loading && <p> loading...</p>}

            <div style = {{backgroundColor : "#3a6079"}}>
               {data.map((item, index) => (
                  <div key={index} style={{ border: " solid #fbefef", margin: "10px", padding: "15px",borderRadius: "8px", background: "#f6f2f2", 
}}>
                      <p> @🫀 Heart Rate: {item.heart_rate}</p>
                      <p> @ SpO2: {item.spo2}</p>
                      <p> @ Time: {item.timestamp}</p>
                  </div>
            ))}
        </div>
        </div>
    );
}

export default Dashboard;