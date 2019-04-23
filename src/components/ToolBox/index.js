import React from 'react';
import Category from './Category';
import CoreCategory from './categories/CoreCategory';
import categoryDefinitions from './categories/DiscordBlocks/autogen';
import StarterCategory from './categories/DiscordBlocks/StarterCategory';


const ToolBox = () => (
  <xml is="xml" id="toolbox">
    <CoreCategory />
    <category is="category" name="Variables" custom="VARIABLE"></category>
    <category is="category" name="Functions" custom="PROCEDURE"></category>
    <Category blocks={StarterCategory} name="Discord.js">
      <category is="category" name="For Elite Developers">
        {categoryDefinitions.map(category => <Category key={category.name} blocks={category} />)}
      </category>
    </Category>
  </xml>
);

export default ToolBox;