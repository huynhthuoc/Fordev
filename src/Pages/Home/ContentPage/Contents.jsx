import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Contents.scss';
const Contents = () => {
  const welcomeMassages = [
    'Hi Welcome to Fordev ',
    'Thank you for coming',
    'I hope you enjoy my website',
    'Have a great day!',
  ];
  const coderLife = `
let life = () => {
  try {
    dream();
    workHard();
    throw new Error("bug");
  } catch (e) {
    learn(e);
    retry();
  } finally {
    console.log("continue...");
  }
};

life();
  `;
  return (
    <div className="homePage__content">
      <div className="content__print">
        {' '}
        <span style={{ color: '#4ec9b0' }}>console</span>
        <span>.</span>
        <span style={{ color: '#dcdcaa' }}>log</span>
        <span>
          (<span style={{ color: '#ce9178' }}>"</span>
        </span>
        <div className="print__text">
          {welcomeMassages.map((message, index) => {
            return (
              <h4
                key={index}
                style={{ color: '#ce9178', animationDelay: `${index * 2}s` }}
              >
                {message}
              </h4>
            );
          })}
        </div>
        <span>
          <span style={{ color: '#ce9178' }}>"</span>);
        </span>
      </div>
      <div className="content__text">
        <SyntaxHighlighter
          customStyle={{ backgroundColor: '#1e1e2f', borderRadius: '1rem' }}
          language="javascript"
          style={vscDarkPlus}
        >
          {coderLife}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Contents;
