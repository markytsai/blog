<template>
  <div class="blog-detail" ref="blogDetailRef">
    <div class="blog-title">
      <h1>比尔盖茨的2015年书单: 你应该多读书</h1>
    </div>
    <div class="blog-meta">
      <span>Mar. 25, 2020</span> &nbsp;|&nbsp; <span>外刊</span> &nbsp;|&nbsp; Views(<span>20</span>)&nbsp; |&nbsp;
      Comments(<span>0</span>)
      <a class="blog-tag" href="/blog/tag/11" title="金融">金融</a>
    </div>
    <div class="blog-before">
      <span style="color:hsl(0,75%,60%);">微信可以选择关注“十六毛虫”哦</span>
    </div>
    <div class="blog-body" v-html="this.blogContent">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  created () {
    this.blogContent =
      '<p>最近看了两本书，分别是《还原真实的美联储》和《金融的本质：伯南克四讲美联储》。前者的作者是王健，担任过<span style="background-color:rgb(255,255,255);color:rgb(77,81,86);">担任美联储达拉斯联邦储备银行高级经济学家兼政策顾问，后者的作者是美联储上任主席伯南克（Ben Shalom Bernanke）。合上书，便感觉以前对2008年的金融危机的认知是那么浅薄，甚至可以说是无知。</span></p><p>The financial crisis was primarily caused by deregulation in the financial industry. That permitted banks to engage in hedge fund trading with derivatives. Banks then demanded more mortgages to support the profitable sale of these derivatives. They created interest-only loans that became affordable to subprime borrowers.</p><p>金融危机主要是由金融业的放松管制引起的。 这使得银行可以利用衍生品从事对冲基金交易。 银行需要更多抵押贷款，来支持这些衍生品的盈利销售。 他们创造了只需要支付利息的贷款，而这种贷款在次级抵押贷款人看来是可以负担得起的。</p><blockquote><p>deregulation 放松管制</p></blockquote><p>In 2004, the Federal Reserve raised the fed funds rate just as the interest rates on these new mortgages reset. Housing prices started falling in 2007 as supply outpaced demand. That trapped homeowners who couldn\'t afford the payments, but couldn\'t sell their house. When the values of the derivatives crumbled, banks stopped lending to each other. That created the financial crisis that led to the Great Recession.</p><p>2004年，就在这些新抵押贷款的利率调整之时，美联储提高了联邦基金利率。 由于供应超过需求，房价于2007年开始下跌。 这使（背负次级贷款的）房主陷入了困境，他们偿还不起付款，也无法出售房屋。 当衍生品的价值体系崩溃时，银行停止相互放贷。 这便造成了导致大萧条的金融危机。</p><blockquote><p>Fed Funds Rate 联邦基金利率，指的是银行把钱存在美联储的利率。</p></blockquote><h4 style="margin-left:0px;">Deregulation</h4><p style="margin-left:0px;">In 1999, the Gramm-Leach-Bliley Act, also known as the Financial Services Modernization Act, repealed the&nbsp;<a href="https://www.thebalance.com/glass-steagall-act-definition-purpose-and-repeal-3305850">Glass-Steagall Act of 1933.</a>﻿The repeal allowed banks to use deposits to invest in derivatives. Bank lobbyists said they needed this change to compete with foreign firms. They promised to only invest in low-risk securities to protect their customers.</p><p style="margin-left:0px;">1999年，《the Gramm-Leach-Bliley Act》（又称《金融服务现代化法案》）废除了1933年的《the&nbsp;<a href="https://www.thebalance.com/glass-steagall-act-definition-purpose-and-repeal-3305850">Glass-Steagall Act of 1933</a>》。这次的废除允许银行使用存款来投资衍生品。银行游说者说，他们需要这种改变才能与外国公司竞争。他们承诺只投资低风险证券以保护其客户（的利益不受损失）。</p><p style="margin-left:0px;">The following year, the&nbsp;Commodity Futures Modernization Act&nbsp;exempted credit default swaps and other derivatives from regulations. This federal legislation overruled the state laws that had formerly prohibited this from gambling. It specifically exempted trading in energy derivatives.</p><p style="margin-left:0px;">次年，《商品期货现代化法案》将信贷违约掉期和其他衍生产品从法规中免除。这项联邦立法推翻了一些州禁止赌博的法律。它特别豁免了能源衍生品交易的限制。</p><blockquote><p style="margin-left:0px;">exempt &nbsp;<span style="color:rgb(51,51,51);">豁免；免除 &nbsp;</span><span style="color:hsl(240,75%,60%);">Men in college were exempt from military service 在校男学生可以免于服兵役。</span></p><p style="margin-left:0px;">credit default swap 即CDS. 是一种信贷违约互换协议，当信贷正常的时候，购买人需要向销售CDS的人付保费，如果信贷发生违约或其他信贷问题，购买人可以活得一份赔偿。CDS在2008年的次贷危机中也成为了一部分人暴富的来源。</p></blockquote><p style="margin-left:0px;">Who wrote and advocated for passage of both bills? Texas Senator Phil Gramm, Chairman of the Senate Committee on Banking, Housing, and Urban Affairs. He listened to lobbyists from the energy company, Enron. His wife, who had formerly held the post of Chairwoman of the Commodities Future Trading Commission, was an Enron board member. Enron was a major contributor to Senator Gramm’s campaigns. Federal Reserve Chairman Alan Greenspan and former&nbsp;Treasury Secretary&nbsp;Larry Summers&nbsp;also lobbied for the bill’s passage.</p><p style="margin-left:0px;">是谁撰写并主张通过这两项法案？德克萨斯州参议员Phil Gramm，他是参议院银行，住房和城市事务委员会主席。他听了来自能源公司安然（Enron）的游说人。他的妻子曾担任安然（Enron）董事会成员，此前曾担任商品期货交易委员会主席。安然（Enron）是格雷姆参议员竞选活动的主要贡献者。美联储主席格林斯潘和前财政部长拉里·萨默斯也游说法案并获得通过。</p><p style="margin-left:0px;">Enron wanted to&nbsp;engage in&nbsp;derivatives&nbsp;trading using its online futures exchanges. Enron argued that foreign&nbsp;derivatives exchanges were giving overseas firms an unfair competitive advantage.</p><p style="margin-left:0px;">安然希望通过在线期货交易所从事衍生品交易。安然认为，外国衍生品交易所会给海外公司带来不公平的竞态势。</p><blockquote><p style="margin-left:0px;"><span style="color:hsl(210,75%,60%);">Big banks had the resources to become sophisticated at the use of these complicated derivatives. The banks with the most complicated financial products made the most money. That enabled them to buy out smaller, safer banks. By 2008, many of these major banks became too big to fail.</span></p><p style="margin-left:0px;"><span style="color:hsl(210,75%,60%);">大银行拥有使用这些复杂衍生工具的能力，可以使其变得复杂。 金融产品最复杂的银行赚钱最多。 这使他们能够购买规模较小，更安全的银行。 到2008年，这些大型银行中的许多已经变得太大而无法倒闭。(当出现黑天鹅时候，这反而是一个祸根）</span></p></blockquote><h4 style="margin-left:0px;">Securitization &nbsp;证券化</h4><p style="margin-left:0px;">How did securitization work? First, hedge funds and others sold <a href="https://www.thebalance.com/mortgage-backed-securities-types-how-they-work-3305947">mortgage-backed securities</a>, <a href="https://www.thebalance.com/cdos-collateralized-debt-obligations-3305822">collateralized debt obligations</a>, and other <a href="https://www.thebalance.com/what-are-derivatives-3305833">derivatives</a>. A mortgage-backed security is a financial product whose price is based on the value of the mortgages that are used for&nbsp;collateral. Once you get a mortgage from a bank, it sells it to a hedge fund on the&nbsp;secondary market.</p><p style="margin-left:0px;">证券化如何运作？首先，对冲基金和其他基金出售抵押支持证券（MBS），抵押债务（CDO）和其他衍生工具。抵押支持证券是一种金融产品，其价格基于抵押品抵押的价值。从银行获得抵押贷款后，抵押贷款会将其出售给二级市场上的对冲基金</p><blockquote><p style="margin-left:0px;">在这里，MBS和CDO在金融危机中扮演了重要的角色。房主的抵押贷款被银行等一些金融机构包装成为MBS和CDO在二级市场上售卖，充其量这些银行只是一个中介，从抵押贷款人和证券购买人中间拿去佣金，但是由于金融机构的贪婪，他们本身也会持有许多的包装债券，导致后来大量次贷违约，手中的债券大量且快速的贬值，最终靠近破产的边缘。</p></blockquote><p style="margin-left:0px;">The hedge fund then bundles your mortgage with a lot of other similar mortgages. They used computer models to figure out what the bundle is worth based on several factors. These included&nbsp;the monthly payments, the total amount owed, the likelihood you will repay, and future home prices. The hedge fund then sells the mortgage-backed security to investors.</p><p style="margin-left:0px;">然后，<span style="background-color:rgb(255,255,255);color:rgb(51,51,51);">对冲基金将您的抵押贷款与许多其他类似的抵押贷款捆绑在一起</span>。他们使用计算机模型基于几个因素来计算出该捆绑包的价值。其中包括每月还款额，所欠的总额，还款的可能性以及未来的房价。然后，对冲基金将抵押贷款支持的证券出售给投资者。（小编住：这也就把风险分散给了广大投资者）</p><p style="margin-left:0px;">Since the bank sold your mortgage, it can make new loans with the money it received. It may still collect your payments, but it sends them along to the hedge fund, who sends it to their investors. Of course, everyone takes a cut along the way, which is one reason they were so popular. It was basically risk-free for the bank and the hedge fund.</p><p style="margin-left:0px;">由于银行出售了您的抵押贷款，因此可以用收到的钱来提供新的贷款。它可能仍会收集你的付款，但会将其卖给对冲基金，后者再将其卖给投资者。当然，每个人都在会在自己的环节上收取一定费用，这正是这些债券如此受欢迎的原因之一。对于银行和对冲基金来说，这基本上是无风险的。（当然建立在房价上涨的趋势之上）</p><p style="margin-left:0px;">The investors took all the risk of default, but they didn\'t worry about the risk because they had insurance, called&nbsp;<a href="https://www.thebalance.com/credit-default-swaps-pros-cons-crises-examples-3305920">credit default swaps</a>.﻿&nbsp;These were sold by solid insurance companies like the&nbsp;American International Group. Thanks to this insurance, investors snapped up the derivatives. In time, everyone owned them, including&nbsp;pension funds, large banks, hedge funds, and even&nbsp;individual investors. Some of the biggest owners were&nbsp;Bear Stearns, Citibank, and Lehman Brothers.</p><p style="margin-left:0px;">投资者承担了违约的全部风险，但他们并不担心风险，因为他们拥有称为信用违约交换的保险。这些保险由像美国国际集团这样的坚实的保险公司出售。由于有了这项保险，投资者抢购衍生产品。随着时间的流逝，每个人都拥有它们，包括养老基金，大型银行，对冲基金，甚至是个人投资者。其中一些最大的所有者是贝尔斯登，花旗银行和雷曼兄弟。</p><p style="margin-left:0px;">A derivative backed by the combination of both&nbsp;real estate&nbsp;and insurance&nbsp;was very profitable. As the demand for these derivatives grew, so did the banks\' demand for more and more mortgages to back the securities. To meet this demand, banks and mortgage brokers offered home loans to just about anyone.</p><p style="margin-left:0px;">由房地产和保险结合起来的衍生产品非常有利可图。随着对这些衍生工具需求的增长，银行对越来越多的抵押贷款支持证券的需求也增加了。为了满足这一需求，银行和抵押经纪人向几乎任何人提供住房贷款。（这也拉开了次贷危机的爆发买下了种子）</p><blockquote><p style="margin-left:0px;"><span style="background-color:rgb(247,247,247);color:rgb(34,34,34);">Banks offered subprime mortgages because they made so much money from the derivatives, rather than the loans themselves. 都是贪婪惹的祸</span></p></blockquote><h4 style="margin-left:0px;">The Growth of Subprime Mortgages &nbsp;次贷的增长</h4><p style="margin-left:0px;">In 1989, the&nbsp;<a href="https://www.thebalance.com/what-is-firrea-3305839">Financial Institutions Reform, Recovery, and Enforcement Act</a> (FIRREA)&nbsp;increased enforcement of the&nbsp;<a href="https://www.thebalance.com/community-reinvestment-act-3305681">Community Reinvestment Act</a>. This Act sought to eliminate bank “redlining” of poor neighborhoods.That practice&nbsp;had contributed to the growth of ghettos in the 1970s. Regulators now publicly ranked banks as to how well they “greenlined” neighborhoods.﻿&nbsp;<a href="https://www.thebalance.com/fannie-mae-vs-freddie-mac-3305695">Fannie Mae and Freddie Mac</a>&nbsp;reassured banks that they would securitize these subprime loans. That&nbsp;was the “pull” factor complementing the “push” factor of the CRA.</p><p style="margin-left:0px;">1989年，《金融机构改革，恢复和执行法》（FIRREA）加强了《社区再投资法》的执行力度。 该法案旨在消除贫困社区的银行``红线\'\'。这种做法导致了1970年代贫民窟的增加。 监管机构现在对银行进行绿化的程度进行公开排名。范妮·梅（Fannie Mae）和房地美（Freddie Mac）向银行保证，他们将把这些次级贷款证券化。 那是《社区再投资法》的``推动\'\'因素的补充。</p><h4 style="margin-left:0px;">The Fed Raised Rates on Subprime Borrowers 美联储提高次贷的利率</h4><p style="margin-left:0px;">Banks hit hard by the 2001 recession welcomed the new derivative products.&nbsp;In December 2001, Federal Reserve Chairman Alan Greenspan lowered the fed funds rate to 1.75%.<span style="color:rgb(0,0,238);">11</span>﻿ The Fed lowered it again in November 2002&nbsp;to 1.25%.</p><p style="margin-left:0px;">在2001年衰退中遭受重创的银行欢迎新的衍生产品。 2001年12月，美联储主席格林斯潘（Alan Greenspan）将联邦基金利率降至1.75％。2002年11月再次将利率降至1.25％。</p><p style="margin-left:0px;">That also lowered interest rates on&nbsp;<a href="https://www.thebalance.com/what-is-an-adjustable-rate-mortgage-3305811">adjustable-rate mortgages</a>. The payments were cheaper because their interest rates were based on short-term Treasury bill yields, which are based on the fed funds rate. But, that lowered banks\' incomes, which are based on loan interest rates.</p><p style="margin-left:0px;">这也降低了可调整利率抵押贷款的利率。贷款更便宜，因为它们的利率是基于短期国库券收益率，而短期国库券收益率是基于联邦基金利率。但是，这也降低了银行基于贷款利率的收入。</p><p style="margin-left:0px;">Many homeowners who couldn\'t afford conventional mortgages were delighted to be approved for these&nbsp;<a href="https://www.thebalance.com/interest-only-loan-types-pros-and-cons-3305936">interest-only loans</a>.&nbsp;As a result, the percentage of subprime mortgages more than doubled, from 6% to 14%, of all mortgages between 2001 and 2007.The creation of&nbsp;mortgage-backed securities&nbsp;and the secondary market helped end&nbsp;the 2001 recession</p><p style="margin-left:0px;">许多负担不起常规抵押贷款的房主很高兴获得这些仅还利息的贷款。结果，在2001年至2007年之间，次级抵押贷款的百分比在所有抵押贷款中所占比例从6％增至14％翻了一番以上。抵押抵押证券和二级市场结束了2001年的衰退。</p><p style="margin-left:0px;">It also created an&nbsp;<a href="https://www.thebalance.com/asset-bubble-causes-examples-and-how-to-protect-yourself-3305908">asset bubble</a>&nbsp;in&nbsp;real estate&nbsp;in 2005.&nbsp;The demand for mortgages drove up demand for housing, which&nbsp;homebuilders&nbsp;tried to meet. With such cheap loans, many people bought homes as investments to sell as prices kept rising.</p><p style="margin-left:0px;">它还在2005年带来了房地产的资产泡沫。抵押贷款需求推动了住房需求，房屋建筑商试图满足住房需求。有了这么便宜的贷款，随着价格不断上涨，许多人买了房子作为投资出售.</p><p style="margin-left:0px;">Many of those with adjustable-rate loans didn\'t realize the rates would reset in three to five years. In 2004, the Fed started raising rates. By the end of the year, the fed funds rate was 2.25%. By the end of 2005, it was 4.25%. By June 2006, the rate was 5.25%.Homeowners were hit with payments they couldn\'t afford. These rates rose much faster than&nbsp;past fed funds rates.</p><p style="margin-left:0px;">许多拥有浮动利率贷款的人没有意识到利率会在三到五年内重新调整。 2004年，美联储开始加息。到年底，联邦基金利率为2.25％。到2005年底，这一比例为4.25％。到2006年6月，该比率为5.25％.房主遭受无法负担的付款带来的冲击。这些贷款利率的上涨速度远远超过过去的联邦基金利率上涨的速度。</p><h4 style="margin-left:0px;">Historical Fed Funds Rate</h4><p style="margin-left:!important;">Fed funds rate leading up to and following 2008 financial crisis..</p><figure class="image"><img src="http://image.mochoong.top/mochoong/6d2e271483006666f8bb6844d7362385.png"></figure><p><span style="background-color:rgb(255,255,255);color:rgb(34,34,34);">In 2005, homebuilders finally caught up with demand. When supply outpaced demand, housing prices started to fall. New home prices fell 22% from their peak of $262,600 in March 2007 to $204,200 in October 2010.Falling home prices meant mortgage-holders could not sell their homes for enough to cover their outstanding loan. The Fed\'s rate increase couldn\'t have come at a worse time for these new homeowners. They couldn\'t afford the rising mortgage payments. The housing market&nbsp;bubble turned to a bust. That created the&nbsp;</span><a href="https://www.thebalance.com/2007-financial-crisis-overview-3306138">banking crisis in 2007</a><span style="background-color:rgb(255,255,255);color:rgb(34,34,34);">, which spread to&nbsp;</span><a href="https://www.thebalance.com/2008-financial-crisis-timeline-3305540">Wall Street in 2008</a><span style="background-color:rgb(255,255,255);color:rgb(34,34,34);">.</span></p><p>2005年，房屋建筑商生产速度终于超过了需求量。当供应超过需求量时，房价开始下跌。 新房价格从2007年3月的峰值262,600美元下降22％至2010年10月的204,200美元。房价下跌意味着抵押贷款持有人无法卖出足够的住房来偿还未偿还的贷款。 对于这些新房主而言，美联储加息已经到了一个最糟糕的地步。 房主负担不起抵押贷款的提高。于是，房地产市场泡沫破灭。 这在2007年造成了银行业危机，并在2008年蔓延至华尔街。</p><h4 style="margin-left:0px;">The Bottom Line 底线</h4><p style="margin-left:0px;">Deregulation in the financial industry was the primary cause of the 2008 financial crash. It allowed speculation on derivatives backed by cheap, wantonly-issued mortgages, available to even those with questionable creditworthiness.</p><p style="margin-left:0px;">金融业的放松管制是2008年金融危机的主要原因。它允许对由廉价，肆意发行的抵押贷款支持的衍生品进行投机行为，即使那些信誉欠佳的抵押贷款人也可以使用。</p><p style="margin-left:0px;">Rising property values and easy mortgages attracted a lot of people to avail of home loans. This created the housing market bubble. When the Fed raised interest rates in 2004, the consequential increased mortgage payments squeezed home borrowers’ abilities to pay. This burst the bubble in 2007.</p><p style="margin-left:0px;">房地产价格上涨和抵押贷款便利性吸引了很多人去申请住房贷款，这给房地产市场泡沫埋下了祸根。当美联储在2004年加息时，随之而来的抵押贷款还款的增长挤压了房屋借款人的还款能力。这在2007年刺破了泡沫。</p><p style="margin-left:0px;">Since home loans were intimately tied to hedge funds, derivatives, and credit default swaps, the resounding crash in the housing industry drove the U.S. financial industry to its knees as well. With its global reach, the U.S. banking industry almost pushed most of the world’s financial systems to near collapse as well. To prevent this, the U.S. government was forced to implement enormous bail-out programs for financial institutions previously billed as “too big to fail.”</p><p style="margin-left:0px;">由于房屋贷款与对冲基金，衍生工具和信用违约掉期息息相关，因此房地产行业的轰然倒塌也使美国金融业陷于瘫痪。凭借其全球影响力，美国银行业也几乎将世界上大多数金融系统推向崩溃的边缘。为了防止这种情况，美国政府被迫对以前被称为“太大而不能倒闭”的金融机构实施庞大的救助计划。</p><p style="margin-left:0px;">The 2008 financial crisis has similarities to the 1929 stock market crash. Both involved reckless speculation, loose credit, and too much debt in asset markets, namely, the housing market in 2008 and the stock market in 1929.</p><p style="margin-left:0px;">2008年的金融危机与1929年的股市崩盘有相似之处。两者都涉及疯狂的投机行为，宽松的信贷标准以及资产市场（即2008年的房地产市场和1929年的股票市场）的过多债务。</p>'
  }
}
</script>

<style>
.blog-title {
  text-align: left;
}

.blog-tag {
  float: right;
  margin-right: 10px;
  color: #6ebbab;
}

.blog-tag:hover {
  background-color: #eb6969;
  color: white;
}

.blog-before {
  text-align: center;
}

.blog-meta {
  font-size: 13px;
  color: #888;
  /* display: inline-block; */
  margin-bottom: 15px;
}

.blog-body {
  border-top: 1px #eee solid;
  padding-top: 10px;
  /* font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif; */
  font-family: 'Tahoma', sans-serif;
  color: rgb(26, 26, 26);
  line-height: 1.6;
  font-size: 15px;
}

/deep/ .blog-body a {
  color: black;
  border-bottom: 1px solid #ff8665;
}

/deep/ .blog-body a:hover {
  color: #ff8665;
  border-bottom: 1px solid transparent;
}

.blog-title h1 {
  margin: 0 0 10px 0;
  font-size: 32px;
  font-weight: bold;
}

.blog-extra ul {
  text-align: right;
}

.blog-extra ul li {
  display: inline-block;
  padding: 5px 10px 0 0;
}

.blog-body p {
  margin-bottom: 16px;
}

.blog-body blockquote {
  padding: 10px 10px;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
  background-color: #fbfaf7;
  margin-bottom: 16px;
}

.blog-body blockquote p:last-child {
  margin-bottom: 0;
}

.blog-body img {
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .blog-body {
    padding: 10px;
  }
}
</style>
