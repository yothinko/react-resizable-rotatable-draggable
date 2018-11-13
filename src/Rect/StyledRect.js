import styled from "styled-components";

export default styled.div`
  position: absolute;
  border: 3px solid white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.45);

  .square {
    position: absolute;
    background: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    width: 17px;
    height: 17px;
    border-radius: 100%;
  }

  .resizable-handler {
    position: absolute;
    width: 17px;
    height: 17px;
    cursor: pointer;
    z-index: 2;

    &.tl,
    &.t,
    &.tr {
      top: -10px;
    }

    &.tl,
    &.l,
    &.bl {
      left: -10px;
    }

    &.bl,
    &.b,
    &.br {
      bottom: -10px;
    }

    &.br,
    &.r,
    &.tr {
      right: -10px;
    }

    &.l,
    &.r {
      margin-top: -10px;
    }

    &.t,
    &.b {
      margin-left: -10px;
    }
  }

  .rotate {
    position: absolute;
    cursor: pointer;
    width: calc(100% + 4rem);
    height: calc(100% + 4rem);
    left: -2rem;
    top: -2rem;
    z-index: -1;
  }

  .t,
  .tl,
  .tr {
    top: -10px;
  }

  .b,
  .bl,
  .br {
    bottom: -10px;
  }

  .r,
  .tr,
  .br {
    right: -10px;
  }

  .tl,
  .l,
  .bl {
    left: -10px;
  }

  .l,
  .r {
    top: 50%;
    transform: translateY(-50%);
  }

  .t,
  .b {
    left: 50%;
    transform: translateX(-50%);
  }
`;
