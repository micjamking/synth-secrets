# Synthesizing The Rest Of The Hammond Organ: Part 3  
_Original article: [http://www.soundonsound.com/sos/mar04/articles/synthsecrets.htm][0]_

We conclude our analysis of the fabulously complex beast that is the Leslie rotary speaker. This is the 59th article in a 63-part series. Read [all parts][1].

Gordon Reid

Photo: Richard Ecclestone
[![Synth Header Leslie.s](http://media.soundonsound.com/sos/mar04/images/synthheaderleslie.s.jpg)][2]

Last month, we analysed the nature of the 'Leslie' rotating speaker system, and I showed how any signal played through such a device is subjected to frequency modulation, amplitude modulation, tone modulation, and reverberation. I also showed how --- in principle --- we could use an LFO connected to the pitch modulation input of an oscillator, plus various filters, amplifiers and delay lines, to emulate this effect. But the weak link was the oscillator and LFO. It's all very well modulating the pitch of a signal produced electronically in this fashion, but this method gives us no clue as to how we could modulate _any_ signal, such as that produced by an organ, a guitar, or a human voice. If we fail to find a way to do this, we cannot properly synthesize the rotary speaker. On the other hand, since such effects exist, and existed long before the development of modern digital units, it can't be that hard... can it? After all, many players used analogue rotary speaker effects in the 1970s, even though they weren't particularly convincing.

Of course, these days, there are plenty of available digital rotary speaker simulators, but as with previous instalments of this series, I'm going to describe the process using analogue principles, as it's easier that way to relate the constituent parts to conventional synthesizer components, and understand how everything works.

Let's start by returning to what this series was examining way back in _SOS_ August 2000 (see [www.soundonsound.com/sos/aug00/articles/synthsec.htm][3]). That month, I showed how the concepts behind Sample and Hold (or S&H) synth modules are related to those behind analogue-to-digital converters, and thus to all of digital audio. Today, I find myself at the same starting point, and, although it may not be obvious how discussions of S&H circuits and Leslie speakers should be so closely linked, I'll ask that you bear with me because --- as always --- all should soon become clear.

[![Top of page](http://media.soundonsound.com/images/arttop.gif)][4]

A Quick Recap

To understand S&H and how it leads to the technology of modulated effects, I'm going to review some of the ground that we covered back in 2000, starting with Figure 1 (below), which I've copied from the previous article. As you can see, this is a remarkably simple circuit, comprising just two components: a capacitor and a switch.

There's nothing stopping us from presenting an audio signal, an LFO, an envelope, or anything else to the input in Figure 1, as I did back in 2000\. However, this month, I'm going to concentrate on presenting audio signals, starting with a simple sine wave.

Imagine that, just for an instant, the switch in the diagram closes. If the capacitor can react quickly enough, it then charges up (or discharges down) to the voltage at the input, thus 'sampling' that voltage. Then, once the switch has opened again, the voltage across the capacitor cannot change. This is because, on the left-hand side, there is no circuit and, on the right-hand side, the impedance --- which is represented by the mathematical symbol 'z' --- is infinite (which means that no current can flow). However, although no current flows, you can still measure the voltage across the output.

That's all there is to it... when the switch is closed, the capacitor 'samples' the input voltage. When the switch is open, the capacitor 'holds' that voltage, allowing other circuits to respond to it as appropriate.
[![Fig 01- S&H circuit](http://media.soundonsound.com/sos/mar04/images/fig01shcircuit.s.jpg)][5]

Figure 1: The simplest representation of a S&H circuit.

Figure 1: The simplest representation of a S&H circuit.



[0]: http://www.soundonsound.com/sos/mar04/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/mar04/images/synthheaderleslie.l.jpg
[3]: http://www.soundonsound.com/sos/aug00/articles/synthsec.htm
[4]: #Top
[5]: http://media.soundonsound.com/sos/mar04/images/fig01shcircuit.l.jpg