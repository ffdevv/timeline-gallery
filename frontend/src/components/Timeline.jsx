import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
  {
    data: "2019-12-05",
    label: "Admission Start",
  },
  {
    data: "2020-01-21",
    label: "Start 1st round",
  },
  {
    data: "2020-02-25",
    label: "Start 2nd round",
  },
  {
    data: "2020-03-16",
    label: "Start 3rd round",
  },
  {
    data: "2020-04-19",
    label: "Start 4th round",
  },
  {
    data: "2020-05-23",
    label: "Complete",
  }
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curLabel = EXAMPLE[curIdx].label;
    const prevLabel = prevIdx >= 0 ? EXAMPLE[prevIdx].label : "";

    return (
      <div>
        <div
          style={{
            width: "80%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            getLabel={(_, index) => EXAMPLE[index].label}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={EXAMPLE.map((x) => x.data)}
          />
        </div>
        <div className="text-center">
          {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
          {curLabel}
        </div>
      </div>
    );
  }
}
