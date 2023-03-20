import lottie, { AnimationItem } from "lottie-web";
import { Component, createRef } from "react";
import animationData from "./animation.json";

interface AlertAnimationProps {
  width?: number;
  height?: number;
}

interface AlertAnimationState {
  animation?: AnimationItem;
}

class AlertAnimation extends Component<
  AlertAnimationProps,
  AlertAnimationState
> {
  private containerRef = createRef<HTMLDivElement>();
  private animation?: AnimationItem;

  componentDidMount() {
    const { current: container } = this.containerRef;
    if (!container) return;

    const { width = 500, height = 500 } = this.props;

    this.animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        viewBoxSize: `${width} ${height}`,
      },
    });

    this.animation.setSubframe(false);
  }

  componentDidUpdate(prevProps: AlertAnimationProps) {
    const { width = 400, height = 400 } = this.props;

    if (
      this.animation &&
      (width !== prevProps.width || height !== prevProps.height)
    ) {
      this.animation.destroy();
      this.animation = lottie.loadAnimation({
        container: this.containerRef.current as Element,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          viewBoxSize: `${width} ${height}`,
        },
      });
    }
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.destroy();
    }
  }

  shouldComponentUpdate(
    nextProps: AlertAnimationProps,
    nextState: AlertAnimationState
  ) {
    return (
      nextProps.width !== this.props.width ||
      nextProps.height !== this.props.height
    );
  }

  render() {
    return <div ref={this.containerRef}></div>;
  }
}

export default AlertAnimation;
