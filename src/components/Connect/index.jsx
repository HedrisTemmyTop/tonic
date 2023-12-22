import styles from "./Index.module.css";
import img from "./../../assets/Rectangle 1270 (3).svg";
import imgLady from "./../../assets/Rectangle 1270 (4).svg";
import barchart from "./../../assets/Group 208.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiFeather, FiEye, FiSun } from "react-icons/fi";
import "./../../index.css";
import ReactApexChart from "react-apexcharts";

const Connect = () => {
  const chartData = {
    series: [35, 30, 35],

    options: {
      chart: { type: "donut", width: "100%", height: "100%" },
      legend: {
        show: false,
        position: "bottom",
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
      },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      fill: { colors: ["#69E6A6", "#0A2640", "#0DBBFC"] },
      states: {
        hover: { filter: { type: "lighten", value: 0.5 } },
        active: { filter: { type: "none", value: 0 } },
      },

      labels: [
        "35% -  Agile Development",
        "30% -  Investor bandwidth",
        "35% -  A/B testing ",
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "60%",
            labels: {
              show: true,
              name: { show: true },
              total: {
                show: false,
                showAlways: true,
              },
            },
          },
        },
      },
    },
  };

  return (
    <section className={styles.connect}>
      <main className={[styles.main, "container"].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={img} alt="conect" />
          <div className={styles.chart}>
            <img src={barchart} alt="barchart" />
            <div className={styles.percent}>30%</div>
            <div className={styles.cap}>More income in july</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className={styles.connectText}>
            <IoCheckmarkCircle className={styles.check} />
            <span>We connect our customers with the best.</span>
          </div>
          <div className={styles.connectText}>
            <IoCheckmarkCircle className={styles.check} />
            <span>Advisor success customer launch party.</span>
          </div>
          <div className={styles.connectText}>
            <IoCheckmarkCircle className={styles.check} />
            <span>Business-to-consumer long tail.</span>
          </div>
          <button className={styles.startBtn}>
            <span>Start now</span>
          </button>
        </div>
      </main>
      <main
        className={[styles.main, styles.mainContent, "container"].join(" ")}
      >
        <div className={styles.left}>
          <div className={styles.content}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className={styles.box}>
            <FiFeather />
            <span>We connect our customers with the best.</span>
          </div>
          <div className={styles.box}>
            <FiEye />
            <span>Advisor success customer launch party.</span>
          </div>
          <div className={styles.box}>
            <FiSun />
            <span>Business-to-consumer long tail.</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={imgLady} alt="conect" />
          <div className={styles.chart2}>
            <div className={styles.ChartFlow2}>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="179px"
                height="200px"
              />
              <div className={styles.chartGroup}>
                <div className={styles.percent2}>
                  {" "}
                  <div className={styles.color}></div>{" "}
                  <span>35% - Agile Development</span>
                </div>
                <div className={styles.percent2}>
                  {" "}
                  <div className={styles.color2}></div>{" "}
                  <span>30% - Investor bandwidth</span>
                </div>
                <div className={styles.percent2}>
                  {" "}
                  <div className={styles.color3}></div>{" "}
                  <span>35% - A/B testing </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Connect;
