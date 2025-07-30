<h2>Model Variants</h2>

<p>There are four distinct models, differing in two key dimensions:</p>

<ul>
  <li>
    <strong>Embedding Model Used</strong><br />
    <ul>
      <li><strong>text-embedding-3-small</strong>: A lightweight, cost-effective model.</li>
      <li><strong>text-embedding-3-large</strong>: A more advanced model that produces higher-quality representations.</li>
    </ul>
  </li>
  <li>
    <strong>Text Content Used per Comic</strong><br />
    <ul>
      <li><strong>Standard Metadata</strong>: Title, transcript, and alt text.</li>
      <li>
        <strong>Extended Metadata</strong>: Standard metadata plus a human-written explanation from
        <a href="https://www.explainxkcd.com" target="_blank" rel="noopener">explainxkcd.com</a>.
      </li>
    </ul>
  </li>
</ul>

<h2>Breakdown of Models</h2>

<h3>Small</h3>
<ul>
  <li><strong>Embedding model:</strong> <code>text-embedding-3-small</code></li>
  <li><strong>Content used:</strong> Standard Metadata</li>
</ul>
<p>This was the original implementation but did not produce satisfactory results.</p>

<h3>Large <em>(default model)</em></h3>
<ul>
  <li><strong>Embedding model:</strong> <code>text-embedding-3-large</code></li>
  <li><strong>Content used:</strong> Standard Metadata</li>
</ul>
<p>Simply switching to the large model resulted in a major improvement in result quality. In limited testing, this approach consistently produced the most accurate matches. It offers the best balance between semantic reasoning and noise reduction.</p>

<h3>Small w/ Explanation</h3>
<ul>
  <li><strong>Embedding model:</strong> <code>text-embedding-3-small</code></li>
  <li><strong>Content used:</strong> Extended Metadata</li>
</ul>
<p>
  To improve the accuracy of the small model, explanations from explainxkcd.com were added. However, due to length limitations in OpenAI’s embedding input, roughly 300 comics were excluded because their explanations were too long. Since the large model already offered a strong improvement, this variant wasn’t pursued further. Results were slightly better than the standard small model, but still inferior to the large model.
</p>

<h3>Large w/ Explanation</h3>
<ul>
  <li><strong>Embedding model:</strong> <code>text-embedding-3-large</code></li>
  <li><strong>Content used:</strong> Extended Metadata</li>
</ul>
<p>
  For completeness, the extended content set was also embedded using the large model. This version showed minimal difference from the standard large model, with many top results remaining unchanged. The added verbosity sometimes diluted the relevance of results.
</p>
