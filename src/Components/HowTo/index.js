import React from "react";
import * as S from "./style";

function HowTo() {
  return (
    <S.content>
      <h3>HOW TO PLAY</h3>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="#FFFFFF"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </button>
      <S.instructions>
        <p>
          Guess the <strong>WORDLE</strong> in six tries
        </p>
        <p>
          Each guess must be a valid five-letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
      </S.instructions>

      <S.examples>
        <p>
          <strong>Examples</strong>
        </p>
        <S.row>
          <S.square>
            <h1>M</h1>
          </S.square>
          <S.square>
            <h1>O</h1>
          </S.square>
          <S.correct>
            <h1>N</h1>
          </S.correct>
          <S.square>
            <h1>E</h1>
          </S.square>
          <S.square>
            <h1>Y</h1>
          </S.square>
        </S.row>
        <p>The letter N is in the word and in the correct spot.</p>

        <S.row>
          <S.square>
            <h1>F</h1>
          </S.square>
          <S.incorrect>
            <h1>U</h1>
          </S.incorrect>
          <S.square>
            <h1>N</h1>
          </S.square>
          <S.square>
            <h1>N</h1>
          </S.square>
          <S.square>
            <h1>Y</h1>
          </S.square>
        </S.row>
        <p>The letter U is in the word but in the wrong spot.</p>

        <S.row>
          <S.square>
            <h1>B</h1>
          </S.square>
          <S.square>
            <h1>E</h1>
          </S.square>
          <S.square>
            <h1>A</h1>
          </S.square>
          <S.square>
            <h1>C</h1>
          </S.square>
          <S.wrong>
            <h1>H</h1>
          </S.wrong>
        </S.row>
        <p>The letter H is not in the word in any spot.</p>
      </S.examples>
      <p>
        A new <strong>WORDLE</strong> will be available each time you refresh!
      </p>
    </S.content>
  );
}

export default HowTo;
