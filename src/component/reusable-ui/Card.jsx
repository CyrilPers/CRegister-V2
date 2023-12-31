import styled, { css } from "styled-components"
import { theme } from "../../theme"
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight, fadeInFromTop } from "../../theme/animations"

export default function Card({
  title,
  imageSource,
  leftDescription,
  showDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  overlapImageSource,
  isOverlapImageVisible,
  className,
  icon,
}) {

  return (
    <CardStyled

      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
    >
      <div className={className}>
        {showDeleteButton && <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
          <TiDelete className="delete-icon" />
        </button>}

        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img src={overlapImageSource} className="overlap-image" alt="overlap" />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="left-description">{leftDescription}</div>
        </div>
      </div>
    </CardStyled >
  )
}

const CardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}

  border-radius: ${theme.borderRadius.extraRound};
  

  .minimize {
    height: 330px;
    background: ${theme.colors.background_dark};
    box-sizing: border-box;
    width: 210px;
    height: 300px;
    display: flex; 
    padding: 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    position: relative;

    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.orangeHighlight};
    }
    &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.dark};
    }

    .image {
      display: none;
    }

    .title {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.stylish};
    }
    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      color: ${theme.colors.primary};
      padding: 0;
      border: none;
      background: none;
      animation : ${fadeInFromRight} ${theme.animation.speed.slow};
      z-index: 3;

      .delete-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      :hover {
        color: ${theme.colors.red}
      }
      :active{
        color: ${theme.colors.primary}
      }
    }


  }

  .back{
    background-color: ${theme.colors.primary};
  }
  
  .card {
    height: 330px;
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 210px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;


    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.orangeHighlight};
    }
    &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    }

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      color: ${theme.colors.primary};
      padding: 0;
      border: none;
      background: none;
      animation : ${fadeInFromRight} ${theme.animation.speed.slow};
      z-index: 2;

      .delete-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      :hover {
        color: ${theme.colors.red}
      }
      :active{
        color: ${theme.colors.primary}
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} ${theme.animation.speed.slow};
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }    
    }

    .text-info {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.stylish};
      }


      .left-description {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }
    }
    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}  
  }

  @media(max-width: 767px) {
      height: 140px;
      padding: 0;

    .card {
    box-sizing: border-box;
    width: 100px;
    height: 141px;
    padding: 5px;
    padding-bottom: 30px;
      
      .image {
      margin-top: 10px;
      margin-bottom: 10px;
      }
      .delete-button {
        top: 5px;
        right: 5px;
      }

      .text-info {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0;

          .title {
          font-size: ${theme.fonts.size.P3};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 10px;
        }
        .left-description {
          margin-top: -10px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      
    }
    .minimize {
    width: 100px;
    height: 140px;
    padding: 5px;
    padding-bottom: 5px;

    .title {
      font-size: ${theme.fonts.size.P2};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    }
  }

    
  @media(min-width: 768px) and (max-width: 1388px) {
    height: 160px;
    padding: 0;

    .minimize {
    width: 150px;
    height: 190px;
    padding: 10px;
    padding-bottom: 10px;

    .title {
          font-size: ${theme.fonts.size.P3};
    }
  }

    
    .card {
    width: 150px;
    height: 190px;
    padding: 5px;
    padding-bottom: 10px;

    .delete-button {
      top: 5px;
      right: 5px;
    }
    
    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;
      }
    }
  }
`

const hoverableStyle = css`
  &:hover {
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`

const selectedStyle = css`
background: ${theme.colors.primary};
  .primary-button {
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  transition: all 200ms ease - out;
    :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease - out;
  }
    :active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

    &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

    &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
      :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
      :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
}

  .delete-button {
  color: ${theme.colors.white};

    :active {
    color: ${theme.colors.white};
  }
}

  .text-info {
    .left-description {
      color: ${theme.colors.white};
    }
}
`