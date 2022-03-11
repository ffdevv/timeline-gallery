import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import {Spinner} from "react-bootstrap";

import './Timeline.css';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1,
      itemsArray: [],
      itemsMap: {},
      isLoading: true
    };
  }
  
  componentDidMount(){
    window.api = this.props.api;
    this.props.api.getTimelineData().then((data) =>{
      this.setState({
        isLoading : false,
        itemsArray : data.itemsArray,
        itemsMap : data.itemsMap
      })
    });
  }

  render() {
    if (this.state.isLoading){
      return (
        <div className="w-100 text-center">
          <Spinner animation="grow" variant="secondary" />
        </div>
      );
    }

    console.log(this.state);
    const { curIdx, prevIdx, itemsArray } = this.state;
    const { setCurrentMilestone } = this.props;
    setCurrentMilestone(itemsArray[curIdx].id);
    const curLabel = itemsArray[curIdx].label;
    const prevLabel = prevIdx >= 0 ? itemsArray[prevIdx].label : "";
    return (
      <div className="horizontal-timeline">
        <HorizontalTimeline
          styles={{
            background: "#f8f8f8",
            foreground: "#1A79AD",
            outline: "#dfdfdf"
          }}
          getLabel={(_, index) => itemsArray[index].label}
          index={this.state.curIdx}
          indexClick={(index) => {
            const curIdx = this.state.curIdx;
            this.setState({ curIdx: index, prevIdx: curIdx });
            this.props.setCurrentMilestone(itemsArray[index].id);
          }}
          values={itemsArray.map((x) => x.data)}
        />
      </div>
    );
  }
}
