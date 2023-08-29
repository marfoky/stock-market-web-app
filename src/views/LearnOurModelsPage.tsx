import React from 'react'
import Nav from '../components/shared/Nav/Nav'
import '../App.css'

const LearnOurModelsPage = () => {
  return (
    <div>
        <Nav />
        <div className="models-page px-32">
      <h1>Our Financial Market Prediction Models</h1>

      <section className="intro-section">
        <h2>Introduction</h2>
        <p>
          Welcome to the technology center of our platform, where we unravel the mystery behind our cutting-edge financial market prediction models.
          Built with specialized Deep Learning techniques—LSTM for closing price predictions and Net() for high and lows—our models offer a unique blend of accuracy and insight for various market conditions. Whether you're a newbie in the trading world or a seasoned professional, we have something for everyone.
        </p>
      </section>

      <section className="data-section">
        <h2>Data Collection and Preprocessing</h2>
        <p>
          Our data is sourced directly from MetaTrader 5, a leading trading platform specializing in Forex, stocks, and commodities.
          We further enrich this data by adding crucial indicators such as moving averages, RSI, MACD, and volume. The processed data then forms the foundation upon which our models are built.
        </p>
      </section>

      <section className="model-one-section">
        <h2>Model 1: Close Price Predictor</h2>
        <h3>Overview</h3>
        <p>
          The Close Price Predictor uses LSTM (Long Short-Term Memory) networks to provide highly accurate forecasts of an asset's closing price within a user-defined timeframe.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Timeframe Customization</li>
          <li>High Accuracy: Backtested with an impressive success rate of over 85%.</li>
        </ul>
        <h3>How It Works & Why LSTM?</h3>
        <p>
          Long Short-Term Memory (LSTM) networks are a type of recurrent neural network that are well-suited for sequence prediction problems.
          They can remember past information and are less susceptible to the vanishing gradient problem, making them highly effective for time-series predictions like stock prices.
        </p>
      </section>
      <section className="model-two-section">
        <h2>Model 2: High-Low Predictor</h2>
        <h3>Overview</h3>
        <p>
          The High-Low Predictor employs a specialized Neural Network architecture, known as `Net()`, to predict the highest and lowest points an asset will reach within a given timeframe.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Intraday to Long-term Predictions: Suitable for various timeframes, from a single trading day to multiple weeks.</li>
        </ul>
        <h3>How It Works & Why Net()?</h3>
        <p>
          Our custom `Net()` architecture is designed to handle non-linear patterns effectively, offering a versatile and adaptive approach to market volatility. This architecture efficiently learns from multi-dimensional data to predict the high and low points of an asset.
        </p>
      </section>

      <section className="model-three-section">
        <h2>Model 3: Channel Detector and Strength Predictor</h2>
        <h3>Overview</h3>
        <p>
          Specializing in channel identification, this model uses a blend of both LSTM and `Net()` architectures to detect ascending, descending, and consolidation patterns in asset prices. It also predicts the strength and breakout direction of these channels.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Multiple Channel Types: Identifies ascending, descending, and consolidation patterns.</li>
          <li>Strength and Breakout Prediction: Predicts the strength of the channel and the likely breakout direction.</li>
        </ul>
        <h3>How It Works</h3>
        <p>
          Utilizing a combination of LSTM for understanding long-term trends and `Net()` for adapting to short-term fluctuations, the model scans through enriched MetaTrader 5 data to identify and assess channel patterns.
        </p>
      </section>
      <section className="faq-section">
        <h2>FAQ</h2>
        <dl>
          <dt>Q: How do I use these models?</dt>
          <dd>A: Post subscription, you will have access to an intuitive dashboard where you can pick a model, specify your asset, and select your desired timeframe.</dd>
          <dt>Q: How often are the models updated?</dt>
          <dd>A: We perform regular quarterly reviews and updates to ensure that our models remain at the pinnacle of performance and accuracy.</dd>
          <dt>Q: What's the minimum investment required to make the most of these models?</dt>
          <dd>A: Our models are scalable and can be applied to portfolios of any size.</dd>
        </dl>
      </section>
    </div>
    </div>
  )
}

export default LearnOurModelsPage