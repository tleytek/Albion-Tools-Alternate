# Albion Tools
Albion Tools is a web app with a collection of tools to help you play more efficiently.
You can check it out over here at LINK
## 1. Black Market Crafter
This tool is used to skip buying items from the Auction House and instead crafting your own item. Generally this will cost you less silver than buying the item and has the added benefit of increasing your crafting level.
### Reminders/Helpful info

#### Crafting Cost
Crafting cost is 1/20 on the item value
e.g. 

#### Focus Reduction
Focus is reduced by initial-focus-cost \* 0.5^(total-focus-proficiency/10000) **exponential decay formula**

#### Theoretical Risk
Because we are competing with black market flippers, we have to keep an eye on the auction house prices. When an item in the auction house is cheaper than a buy order from the black market, we run the risk of a flipper getting to the order before we do, therefore the item is deemed RISKY. and vice versa for items that are more expensive than a buy order in the black market. Our ideal item is one that is more expensive in the AH than a buy order in the BM but cheaper to craft using refined materials from the AH.

#### Crafting Cost Reduction 
Cost Reduction due to filling journals is calculated as such:

total reward amount = Base amount reward * average of all 4 refined materials AH price at the moment

(Fame for crafting a specific item / total fame required to fill journal) * total reward amount = cost reduction due to filling a journal

**Example:**

12000 silver = 8 Tier 5 items * 1500 silver each

(1440 Fame earned / 2400 Fame required) * 12000 Silver = 7200 Silver return

*This is for using a laborer to take a journal and wait 22 hours for the material return.*

Fame Earned for crafting an item is the total of the fame earned from crafting each refined material

#### Fame Earned Calculation
e.g. T5 plate Chest piece requires 16 T5 Metal bars, 1 metal bar gives 135 fame. Therefore 1 T5 chest piece is 135 * 16 = 2160(1440 without premium bonus)
