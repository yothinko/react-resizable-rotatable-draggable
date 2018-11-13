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
    width: 34px;
    height: 34px;
    cursor: pointer;
    z-index: 2;

    &.tl,
    &.t,
    &.tr {
      top: -17px;
    }

    &.tl,
    &.l,
    &.bl {
      left: -17px;
    }

    &.bl,
    &.b,
    &.br {
      bottom: -17px;
    }

    &.br,
    &.r,
    &.tr {
      right: -17px;
    }

    &.l,
    &.r {
      margin-top: -17px;
    }

    &.t,
    &.b {
      margin-left: -17px;
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
    top: -3px;
  }

  .b,
  .bl,
  .br {
    bottom: -3px;
  }

  .r,
  .tr,
  .br {
    right: -3px;
  }

  .tl,
  .l,
  .bl {
    left: -3px;
  }

  .l,
  .r {
    top: 50%;
  }

  .t,
  .b {
    left: 50%;
  }
`;
