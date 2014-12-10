# Synth Secrets, Part 9: An Introduction To VCAs  
_Original article: [http://www.soundonsound.com/sos/jan00/articles/synthsecrets.htm][0]_

Having laid bare the inner workings of oscillators, contour generators and filters, **Gordon Reid** turns his attention to something which at first sight seems entirely self-evident. Can the humble voltage-controlled amplifier really hold any Synth Secrets? This is the ninth article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/jan00/images/synth1_2s.gif)][2]In the course of this series, there's one synthesizer component I've mentioned frequently -- especially in Synth Secrets Part 3, July '99 -- without fully explaining what it is. It's the Voltage Controlled Amplifier, or 'VCA', and it is an important element in the operation of any analogue synthesizer. Indeed, so fundamental is the VCA that it has its counterparts in every type of synthesis: digitally controlled analogue synths have 'DCAs', while pure digital synths and samplers have all manner of time-variant amplifiers ('TVAs'), operator levels, and heaven knows what else. So this month's article will focus on VCAs and the ways in which they and their latter-day equivalents help you to create the sounds you want to hear.

**Two Types Of VCA?**

Firstly, we must differentiate between amplifiers in the audio signal chain and those used to modify control voltages. So let's start by returning to Synth Secrets Part 3 for a moment, and revisit Figure 1 of that article (Figure 1 of this one, too, opposite). This shows a simple sound generator comprising a tone generator and an amplifier that lets you hear what the generator is... umm, generating. Clearly, the amplifier in this diagram is [![](http://media.soundonsound.com/sos/jan00/images/synth2s.gif)][2]acting in a similar way to the amps in your hi-fi or car stereo. To put it bluntly, it's making the signal louder.

This is all very well, but it's not a good enough description for us today. Have you ever asked yourself, 'What is an amplifier?' If you are a guitarist, you might describe an amplifier as something you use to add distortion and other effects as you boost your sound to a screaming climax. If you are a hi-fi buff, it's more likely that you will describe it as a huge, control-free, and expensive lump of hand-picked valves and power supplies that make the signal louder with as few audible side effects as possible. But if you were an engineer, you would probably describe an ideal amplifier as a device that changes an input signal of amplitude A1 into a new signal that has the same shape as the original, but with output amplitude A2.

Clearly, if A2 is greater than A1, the signal is louder than before. If A2 is less than A1, the signal is quieter than the original. Simple, yes? But it's still not enough to say that signals become quieter or louder. We need to know by how much they do so. Defining this is also simple: we just calculate the ratio of A2 to A1 and call the result the 'Gain' of the amplifier ([Equation 1][3],). So, for example, if A2 is double A1, the r[![](http://media.soundonsound.com/sos/jan00/images/synth3_4s.gif)][4]atio is '2' and we say that the Gain is equal to 2\. Unfortunately, we can't assume that you will perceive the signal to be twice as loud as before, because the human ear does not work this way... but that's a discussion for another time.

Now let's think about the volume control on the front of a device such as a cheap transistor radio. In human terms this is increasing and decreasing the volume of the signal that you hear, so it is modifying the Gain in some fashion. [Figure 2][5] shows a possible implementation for such a control.

In this diagram, the receiver circuit produces a low-amplitude signal which passes directly to a preamplifier. This boosts the signal to 'line level'. The output from this then passes through a volume control which, in this implementation, is just a passive potentiometer. If the volume knob is turned fully clockwise, the signal is unaffected, and passes at line level to the power amplifier. This then boosts the signal to a level at which it can drive a coil of wire and lump of cardboard (a speaker) so that you hear the broadcast. If, however, you turn the volume control progressively anticlockwise, the loudness of the sound you hear will s[![](http://media.soundonsound.com/sos/jan00/images/synth5s.gif)][6]teadily diminish until, when the knob is fully anticlockwise, silence will reign. This is because the potentiometer is progressively reducing the amount of signal reaching the power amplifier.

It might seem odd, but you could redefine this volume knob as an amplifier of sorts. It's just that its Gain never exceeds unity. When it is 'off', the ratio of Output/Input equals 0, and when it is set to its maximum the ratio of Output/Input equals 1\. By definition, therefore, the Gain always lies between 0 and 1\. Normally, however, you would not call a passive device of this sort an 'amplifier'. You would call it an 'attenuator'.

There's another important point to consider about the amplifier/attenuator chain in [Figure 2][5]. We now know that, for any position of the knob, the attenuator's Gain is some number GATTEN which lies between 0 and 1\. We can also assume that the preamplifier has a large Gain (we'll call this GPRE) and that the power amplifier has another large Gain (which we'll call GPOWER). We can then say that the total Gain through the system is the product of all the individual gains, as shown in Equation 2, above.

This is an important result, so let's call it a Synth Secret:

_Whenever you have more than one amplifier and/or attenuator in series, you can calculate the Gain of the whole system simply by multiplying the individual Gains together. _

**A Better Circuit**

Although [Figure 2][5] is easy to understand, the circuit it depicts is not a good one. This is because the audio signal passes through the attenuator itself. Since this will usually be a cheap potentiometer, it's likely that it will introduce crackles and distortion into the signal. This, for most people, is something to be avoided, so we need a better circuit that performs the same job without the unwanted side effects.

[Figure 3][7], above, shows such a circuit. This contains the same elements, but the volume control knob now
"Whenever you have more than one amplifier and/or attenuator in series, you can calculate the Gain of the whole system simply by multiplying the individual Gains together. "

attenuates a voltage source that controls the Gain of the preamplifier. In other words, we have redefined the preamp as a Voltage Controlled Amplifier, and the audio signal no longer passes through the volume control.

**From Radios To Synthesizers...**

Let's now relate our 'radio' to the structure of a simple analogue synthesizer. Clearly, the signal generated by the receiver circuit could be anything: speech, Beethoven's 5th, Silverchair's 'Freak', or a sawtooth wave. So why don't we replace the words 'receiver circuit' with the words 'tone generator'? Next, let's consider the power amplifier in the diagram. A few synths with built-in speakers have these (for example, the ARP 2600, the Roland HS60 and the Yamaha YS200) but most leave the final amplification to external units. As a result, we can lose the 'power amplifier' from our block diagram without compromising our discussion. That leaves the preamplifier and volume control.

If you think back to Synth Secrets Part 3, you'll remember that we can replace a volume control with some sort of controller circuit. So Figure 4 shows the same audio signal path as before, but the preamplifier (now simply called 'Amplifier') is controlled by a contour generator which is itself being triggered by... well, a trigger. [Figure 4][8] m[![](http://media.soundonsound.com/sos/jan00/images/synth6_8s.gif)][9]ay look very different from Figure 3, but in essence it is describing the same relationship of generator, amplifier, and volume control. So let's analyse what's happening.

Let's say that the Tone Generator produces an initial signal of ±2V. Let's also say that the contour generator has been designed to output an ADSR envelope which ranges from 0V to +5V. Now let's suppose that the VCA outputs nothing when 0V is presented to its CV input, and it outputs a maximum audio signal amplitude of ±10V when a +5V CV signal is presented to its CV input. This means that the amplifier in has a maximum Gain of 5 (G=10V/2V) and a minimum Gain of zero (G=0V/2V). Finally, let's define that the amplifier's response is 'linear', ie. that 1V at the CV input generates a Gain of 2; 2V at the CV input generates a Gain of 4, and so on. This means that the amount of audio signal Gain at any given moment is proportional to the instantaneous level of the contour applied to the amplifier's CV input.

All these voltages may seem confusing written down in this way, so I have represented them (I hope) more clearly in [Figure 5\.][10]

**Initial Gain**

You might think that there is enough detail here to represent everything that you need to know about a practical VCA. But there isn't. If you look at the front panels of an ARP Odyssey or an ARP 2600, you'll see a slider marked 'Initial Gain' or 'VCA Gain'. This adds an initial CV, or 'offset', to whatever CV the Contour Generator produces ([see Figure 6][11],). 

So, for example, if we take the contour shown in [Figure 5][10] and add an Initial Gain of +3V, we obtain the contour shown in [Figure 7][11] . This offset has an immediate effect -- the VCA is always being told to produce a Gain greater than zero. Because the CV presented to the VCA has a permanent +3V offset, therefore, signal i[![](http://media.soundonsound.com/sos/jan00/images/synth9s.gif)][12]s always produced at the output: provided the filter is open, the synth will produce sound continously until it is switched off.

**Let's Not Go Too Far...**

Throughout this discussion we have assumed that the VCA has infinite headroom. This means that, no matter how much amplification you demand from it, it will continue to deliver the same shape of signal without adding distortion or any other artefacts. This, of course, is impossible, and if you ask a VCA to generate a signal beyond its capabilities, a particular type of distortion will result.

Let's look again at [Figure 5\.][10] You'll remember that we defined the maximum output from the VCA as ±10V, achieved when the controlling CV reached +5V. So, what would happen if we replaced our 0V to +5V ADSR contour with the +8V contour shown in [Figure 7][11]? Clearly, at the peak of the contour, the VCA would try, and fail, to generate a signal of ±16V. Since it can't exceed ±10V, the signal is 'clipped', as shown in [Figure 8][11].

If you look closely at the part of the output waveform that occurs during the period of the ADSR contour, you can see that the output no longer has the sawtooth shape of the original input signal. The 'tops' of the waveform are squared off in the Attack and Decay stages by the amplifier's inability to amplify above its ±10V limit. The result of this is a harsh distortion ('clipping distortion') that disa[![](http://media.soundonsound.com/sos/jan00/images/synth10s.gif)][13]ppears as the signal demanded of the VCA returns to a range within its capabilities, and the waveform settles back to its original sawtooth shape. Of course, some players use this distortion creatively, and it can be rather effective when an amplifier clips in a 'softer' way, rounding off the waveform rather than squaring it so dramatically. This line of thought could also lead to a discussion of analogue tape compression and saturation, and one of the reasons why analogue recordings differ from digital ones. But, once again, we'll have to leave this for another day.

**A Different Use For VCAs**

Everything we have discussed so far assumes that the VCA is in the audio signal path. But in reality, the majority of VCAs do not reside here: they're in the control voltage paths within the synthesizer.

Let's return to the contour generator controlling the amplifier in [Figure 6][11]. You'll remember that this outputs an ADSR contour with a maximum of +5V at the end of the Attack stage. Now, if you think back to last month's Synth Secrets, you will also recall that the vast majority of analogue contour generators give you no control over the level at the end of the Attack: no matter what the settings for A, D, S or R, the Attack Level is always +5V (or whatever that particular device's maximum might be). This, as we have already discussed, will generate a gain of 5 in our VCA. But there are many occasions when we will not want the contour to affect the signal s[![](http://media.soundonsound.com/sos/jan00/images/synth11s.gif)][14]o dramatically. So what can we do if we don't want the result to be so extreme?

Look at Figure 9 above. As you can see, I have placed a VCA in the control signal path, and this is in turn controlled by a CV that is itself controlled by an attenuator. This VCA applies a Gain (determined by the position of the attenuator) to the ADSR contour so that you can attenuate or amplify it without changing its shape. 

This result would not be important if the ADSR was the only CV affecting the signal amplifier. After all, reducing the amplitude of the contour would be no different from reducing the final output of the synth, maybe just by turning down the external amplifier. But the ADSR is not the only CV. As well as the Initial Gain shown in [Figure 9][15], you could have LFOs or a host of other controllers modifying the audio signal amplifier's action upon the signal. In this case, you are changing the degree by which the ADSR modifies the signal _relative_ to the initial level and any other modifiers in use.

To make this clearer, let's use another example that you will have encountered more often. [Figure 10][16] is similar to [Figure 9][15], except that the CVs are controlling a low-pass filter, not an amplifier. As you can see, the fader at the top of the figure is now the initial level of the filter, most usually called the 'cutoff frequency', and the VCA is controlling the amount of contour applied to this. Clearly, you don't want the filter to open completely for every sound you make, so almost every synth allows you to attenuate the contour using a VCA, as shown.

**Real VCAs**

The important role played by VCAs is often overlooked when we think about synthesis. Indeed, if you look at the control panels of many analogue synths, you'll see that the section described as 'Amplifier' or 'VCA' is mos[![](http://media.soundonsound.com/sos/jan00/images/synth12s.gif)][17]t often dominated by an ADSR contour generator, with perhaps an envelope level control (also called 'Amount') and/or Initial Level control too. This is why many novices find it difficult to differentiate between the contour generator, the VCA in the CV path, and the audio signal amplifier itself. Similarly, the filter section will often contain a second contour generator and another 'Amount' control alongside the cutoff and resonance knobs. This means, of course, that there are VCAs in the VCF section too.

Let's finish this month by looking at a well-specified VCA from a British modular synth manufacturer. As you can see from [Figure 11][18] (above right), the device has four inputs, five knobs, and an output. There are two signal inputs (marked SIG 1 IN and SIG 2 IN), which means that there is a signal mixer in the module. There are two CV inputs which control the amplification of the VCA itself, meaning that there is a CV mixer in there, too. The CV inputs are marked CV1-IN LIN and CV2-IN LOG. Each of the four inputs has an associated level control, and there is an Initial Level control, just as we discussed above. A block diagram for all of this is shown in Figure 12, above.

As you can see, that's quite a lot of electronics. Of course, we shouldn't really call this unit 'just' a VCA, but synthesizer manufacturers often throw strict accuracy to the wind to make things easier to grasp (and thank heavens for that!). You may be curious as to why one of the CV inputs is called 'LIN' and the other 'LOG'. This leads us to a whole new chapter regarding the ways that signals exist and respond in the real world. Consequently, it too will have to wait till another time. 

**...And Finally**

Before finishing, I want to leave you with one more thought. All through this article we've treated the main signal path as an audio signal path. But what's to stop us using CVs as the main input signals in Figures 4, 5, 6, 8, 9, 10 and 12? The answer is 'nothing', and this leads us directly to another Synth Secret:

_One of the most common uses for VCAs is to modify the actions of CVs using other CVs;_

...and, contrary to what I wrote in t

"This is one reason why modular synths are so powerful: you can dynamically modify any signal using any other signal. And the devices that let you do this are VCAs!"

he second paragraph of this article, another:

_We should _not _differentiate between amplifiers in the audio signal chain and those used to modify control voltages._

Of course, there's nothing to stop us passing the output from our first VCA to a second for further modification... and on, and on, and on. And, all the while, our first Synth Secret (suitably modified to take into account the actions of contour generators and other modifiers) still applies:

_Whenever you have more than one amplifier and/or attenuator in series, you can at any moment calculate the Gain of the whole system simply by multiplying the individual Gains -- at each instant -- together. _

This is one of the prime reasons why freely patchable (modular) synths are so powerful: you can dynamically modify any signal -- audio or CV -- using any other dynamic signal (or signals). And the devices that let you do this are... the lowly and often overlooked VCAs! ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/jan00/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jan00/images/synth1_2.gif
[3]: #Anchor-50592
[4]: http://media.soundonsound.com/sos/jan00/images/synth3_4.gif
[5]: #Anchor-50502
[6]: http://media.soundonsound.com/sos/jan00/images/synth5.gif
[7]: #Anchor-perceive-33435
[8]: #Anchor-Gain-46279
[9]: http://media.soundonsound.com/sos/jan00/images/synth6_8.gif
[10]: #Anchor-40573
[11]: #Anchor-amplifier-18610
[12]: http://media.soundonsound.com/sos/jan00/images/synth9.gif
[13]: http://media.soundonsound.com/sos/jan00/images/synth10.gif
[14]: http://media.soundonsound.com/sos/jan00/images/synth11.gif
[15]: #Anchor-will-45000
[16]: #Anchor-33043
[17]: http://media.soundonsound.com/sos/jan00/images/synth12.gif
[18]: #Anchor-signal-14632