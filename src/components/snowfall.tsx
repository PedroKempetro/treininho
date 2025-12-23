"use client";

export function Snowfall() {
  // Generate random animation values for each snowflake
  const getRandomAnimation = (size: 'sm' | 'md' | 'lg') => {
    const left = Math.random() * 120 - 20;
    const flickrDuration = (Math.random() * 20 + 20) / 10;
    const flickrDelay = (Math.random() * 20) / -10;
    const fallDuration = (Math.random() * 100 + 50) / 5;
    const fallDelay = (Math.random() * 100) / -5;
    const blur = Math.random() > 0.5 ? 1 : 0;
    
    let fontSize = '10px';
    if (size === 'md') fontSize = '15px';
    if (size === 'lg') fontSize = '22.5px';

    return {
      left: `${left}vw`,
      fontSize,
      filter: `blur(${blur}px)`,
      animation: `${flickrDuration}s flickr ${flickrDelay}s infinite, ${fallDuration}s fall ${fallDelay}s infinite linear`
    };
  };

  // Generate snowflakes (reduzido para melhor performance)
  const snowflakes = [];
  
  // Small snowflakes (50 - reduzido de 250)
  for (let i = 1; i <= 50; i++) {
    const style = getRandomAnimation('sm');
    snowflakes.push(
      <div key={`sm-${i}`} className="snowflake" style={style}>
        ❄️
      </div>
    );
  }
  
  // Medium snowflakes (15 - reduzido de 50)
  for (let i = 1; i <= 15; i++) {
    const style = getRandomAnimation('md');
    snowflakes.push(
      <div key={`md-${i}`} className="snowflake" style={style}>
        ❄️
      </div>
    );
  }
  
  // Large snowflakes (10 - reduzido de 50)
  for (let i = 1; i <= 10; i++) {
    const style = getRandomAnimation('lg');
    snowflakes.push(
      <div key={`lg-${i}`} className="snowflake" style={style}>
        ❄️
      </div>
    );
  }

  return (
    <div className="snowflake-area">
      {snowflakes}
    </div>
  );
}
