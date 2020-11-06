import styled from 'styled-components'

export const Container = styled.section`
  //height: 60px;
  display: flex;
  width: 100%;
  background: #f9f9f9;

  justify-content: space-between;
  padding: 10px 25px;
  align-items: center;

  .switch {
    --line: #505162;
    --dot: #f7f8ff;
    --circle: #9ea0be;
    --duration: 0.3s;
    --text: #9ea0be;

    display: none;
    cursor: pointer;

    input {
      display: none;
      & + div {
        position: relative;
        &:before,
        &:after {
          --s: 1;
          content: '';
          position: absolute;
          height: 4px;
          top: 10px;
          width: 24px;
          background: var(--line);
          transform: scaleX(var(--s));
          transition: transform var(--duration) ease;
        }
        &:before {
          --s: 0;
          left: 0;
          transform-origin: 0 50%;
          border-radius: 2px 0 0 2px;
        }
        &:after {
          left: 28px;
          transform-origin: 100% 50%;
          border-radius: 0 2px 2px 0;
        }
        span {
          padding-left: 56px;
          line-height: 24px;
          color: var(--text);
          &:before {
            --x: 0;
            --b: var(--circle);
            --s: 4px;
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 var(--s) var(--b);
            transform: translateX(var(--x));
            transition: box-shadow var(--duration) ease,
              transform var(--duration) ease;
          }
          &:not(:empty) {
            padding-left: 64px;
          }
        }
      }
      &:checked {
        & + div {
          &:before {
            --s: 1;
          }
          &:after {
            --s: 0;
          }
          span {
            &:before {
              --x: 28px;
              --s: 12px;
              --b: var(--dot);
            }
          }
        }
      }
    }
  }

  nav {
    .menuItems {
      list-style: none;
      display: flex;

      li {
        margin: 15px;

        a {
          text-decoration: none;
          color: #8f8f8f;
          font-size: 16px;
          font-weight: 400;
          transition: all 0.5s ease-in-out;
          position: relative;
          text-transform: uppercase;

          &::before {
            content: attr(data-item);
            transition: 0.5s;
            color: #8254ff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 0;
            overflow: hidden;
          }

          &:hover {
            &::before {
              width: 100%;
              transition: all 0.5s ease-in-out;
            }
          }
        }
      }
    }
  }

  @media (max-width: 830px) {
    .switch {
      display: block;
    }

    nav {
      display: none;
      display: ${(props) => { props. }}
    }
  }

  img {
    height: 50px;
  }
`
