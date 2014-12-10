# Creative Synthesis With Delays  
_Original article: [http://www.soundonsound.com/sos/may04/articles/synthsecrets.htm][0]_

Effects can play just as important a role in sound creation as the elements in a synth's signal path --- provided you have access to their constituent parts. We take a closer look at effects synthesis with simple delays. This is the 61st article in a 63-part series. Read [all parts][1].

Gordon Reid

For the past two months, I've been describing the nature of delay lines; what they are, and how they work. Having done so, I'm going to make good my promise to show how we can use these to create many of the effects used in today's music, starting with various forms of echo and an unusual reverberator.

You may be wondering what place this discussion has in a series on synthesis. Well, firstly, most synthesizers have some form of effects unit(s), and I'm not just talking about digital workstations with their zillions of insert and master effects. From the earliest days of synthesis, experimental modular instruments offered spring reverbs, and many of the revered monosynths from the 1970s --- the ARP 2600, EMS VCS3, and umm... the Teisco S100P --- did likewise. Admittedly, the practice lost favour for a while, but when bucket-brigade devices (or BBDs) became affordable, the effects that they made possible signalled the introduction of new breeds of synthesizer. Most obviously, ensembles or 'string machines' appeared in large, usually Italian, herds. Simultaneously, chorus units and flangers (which are also effects using delay lines) started to appear on instruments such as the ARP Quadra, the Korg Trident, and the Roland Jupiter 4\. But I think that there's an even more important reason to discuss effects here.

Just as modern synthesizers provide hundreds or even thousands of presets, and have been blamed by many for the demise of innovative sound programming, modern effects units have scores of presets, and can equally be blamed for the demise of innovative _effects_ programming. Indeed, many modern effects units --- from the humble stomp box to sophisticated studio systems --- offer a fixed architecture, and turning the knobs just changes the values of the parameters within that architecture. Some recent products offer variable architecture, allowing you some freedom in how you order different effects blocks in your effects patches, but this is still not the same as having access to the basic building blocks of effects synthesis, and being able to build new, innovative effects structures. Given the huge transformations that effects can wreak on your synth sounds, if you're reading Synth Secrets for ideas on creative sound programming, surely you should extend the same philosophy to your effects?

[![Top of page](http://media.soundonsound.com/images/arttop.gif)][2]

Digital & Analogue --- What's The Difference?

Having spent much of last month's Synth Secrets explaining the operation of a digital delay, and then pointing out how conceptually similar this is to an analogue bucket-brigade device, it's important to point out that they often sound very different. Most of us know this, of course, and know too which side of the analogue versus digital debate we come down on. But this raises a question whose answer is often assumed, but rarely explained. It's this: "Given the conceptual similarities between analogue and digital delays, why is it that they often sound so different?".

[![Fig A - analogue delay](http://media.soundonsound.com/sos/may04/images/figaanaloguedelay.s.jpg)][3]  
[![Fig B - DDL](http://media.soundonsound.com/sos/may04/images/figbddl.s.jpg)][4]

The diagrams below show the aforementioned delays; an analogue BBD with its anti-aliasing and reconstruction filters, and a digital delay line with its associated A-D and D-A converter. As you can see, the two are equivalent, with a stream of samples moving from the input on the left to emerge unmodified on the far right. So, if the sample rate and number of stages are the same in each, why _do_ they sound so different?

The answer lies in the degradations that occur as the signal passes down the line. If there is no failure in the digital delay line, the same data will arrive at the D-A converter as left the A-D converter, so the only changes that occur when comparing the audio input to the audio output (other than delay, of course) are those imposed by the limitations of the converters themselves. In contrast, each Sample & Hold stage in the analogue bucket-brigade device will be affected by the limitations of the capacitors and by electronic noise, so each stage will add or subtract a small voltage from each sample. These errors are cumulative, and although an amount of positive voltage noise added in one place might be cancelled out by a bit of negative voltage noise in another, every sample will be modified by the time it reaches the reconstruction filter. If the errors are random, the resulting signal will sound the same as the original with the addition of white noise, but more often than not, there will be some form of systematic error introduced. Whether you view these differences between the input and the output as a problem or a benefit, however, depends on the kind of sound you favour, and possibly the prevailing wind of current fashion!

[![Top of page](http://media.soundonsound.com/images/arttop.gif)][2]

Analogue, Digital & Tape Delays

I'm going to start looking at what you can do with delays by returning to an analogy I made in passing two months ago. In its simplest incarnation, you can think of a delay line as a tape recorder with an infinitely long strip of tape passing across a record head and then across a replay head (see Figure 1, left). The length of the delay is determined by the distance between the heads, and the speed of the tape as it runs between them. As analogies go, this is a good one.
[![Fig 01 - 1 play head](http://media.soundonsound.com/sos/may04/images/fig011playhead.s.jpg)][5]

Figure 1: The simplest electronic delay represented as a tape delay.

Figure 1: The simplest electronic delay represented as a tape delay.



[0]: http://www.soundonsound.com/sos/may04/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: #Top
[3]: http://media.soundonsound.com/sos/may04/images/figaanaloguedelay.l.jpg
[4]: http://media.soundonsound.com/sos/may04/images/figbddl.l.jpg
[5]: http://media.soundonsound.com/sos/may04/images/fig011playhead.l.jpg