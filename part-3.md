# Synth Secrets, Part 3: Modifiers & Controllers  
_Original article: [http://www.soundonsound.com/sos/jul99/articles/synthsecrets.htm][0]_

**Gordon Reid** moves on from discussing the harmonic components of sound to explaining how they change over time, and some of the tools subtractive synths give you to emulate this process. This is the third article in a 63-part series. Read [all parts][1].

If you have stuck with me for the past two months, you'll know that most natural sounds have complex harmonic structures, and that these derive from the nature of the object making the sound. You'll also appreciate that, no matter how you play them or what you do when you record them, percussion instruments will have significantly different tones from strings, pipes, and other 'conventional' instruments. But this knowledge is far from sufficient to allow you to understand and create the sounds you want artificially, with a synthesizer; you also need to know about the controllers and modifiers that shape the sounds you hear. Look at it this way... if you could define a sound purely by listing all the harmonics it was composed of, manufacturers wouldn't waste money putting all those 'unnecessary' filters and envelope generators and stuff in their products. So let's move on, and find out about how you can tailor a series of synth-derived oscillations into something more musical.

**Modifying A Sound**

There are no sounds that you can define purely in terms of their harmonic spectra. Even if a sound seems to exhibit a consistent tone and volume, there must have been a moment when it began, and a moment when it will end. This implies that the loudness of the sound is _contoured_ in some fashion.[![](http://media.soundonsound.com/sos/jul99/images/secret1small.gif)][2]

Ignoring the start and finish for a moment, unvarying tones are called _static_ or _stationary_ sounds, and they are almost always musically uninteresting. Since no natural sounds are stationary over any significant timescale, the only time you are likely to encounter them is when they have been created by a _signal generator_ (such as those found in analogue synthesizers, for example). You can think of these as devices that generate a tone by outputting a fluctuating voltage that is passed through an amplifier and then onwards to a speaker, which converts the voltage into sound that you can hear (see Figure 1).[![](http://media.soundonsound.com/sos/jul99/images/secret2small.gif)][3]

Let's try to make this idea a bit more meaningful. Imagine that the amplifier in Figure 1 is your hi-fi amp, and that -- although the tone generator is generating a signal -- the volume knob is turned fully anticlockwise so that you hear no sound. Imagine you now turn the control fully clockwise while the sound is playing, and then turn it back anticlockwise again until silence returns.

If you look at Figure 2, you will see that you have added a controller (your manipulation of the knob) that causes the amplifier to modify the audio signal presented to it. But twisting a knob every time you want a non-static sound is hardly sensible, nor are the results precisely reproducible. Moreover, it's quite inappropriate if you are looking to use your tone generator to produce conventional sounds and notes. So you need to replace your fingers with a controller signal that [![](http://media.soundonsound.com/sos/jul99/images/secret3small.gif)][4]gives predictable, reproducible results each time it is used. And it is this that brings us to the important concept of Voltage Control.

Imagine that the Controller in Figure 2 is another fluctuating voltage of some form. This is called a Control Voltage, or CV. Don't worry, for the moment, about how it is generated; just consider that, for any given voltage applied at the amplifier's 'Controller' input, the Amplifier applies a defined Gain to the signal. This describes a Voltage Controlled Amplifier, or VCA. Now, let's see what you can use to generate these CVs.

**Envelopes**

Let's return to the idea of modifying a sound using the volume knob on the front of a hi-fi amplifier. Let's say that, if the knob is turned fully anticlockwise, the applied CV is 0 Volts, and the amplifier's Gain is zero. In other words, silence reigns. At the other extreme, let's say that, if the knob is rotated fully clockwise, the CV is 10V, and the Gain is maximum -- ie. the sound is at its loudest. You could then imagine using the knob to apply varying voltages to create a loudness 'contour' for our sound. For example, the CV could start at 0 Volts, rise to 10V, drop to 5V, linger there for a while, before returning to 0V some time later. This profile is shown i[![](http://media.soundonsound.com/sos/jul99/images/secret4small.gif)][5]n Figure 3\.

As you can see, the contour of the CV is identical to the loudness contour. In other words, you have defined the loudness of the sound at any given time using the CV. The shapes in Figure 3 are called Envelopes, so one of the devices that you can use to control our amplifier is, not surprisingly, called an Envelope Generator. EGs may be basic or complex, but (if they are not themselves modified in some way by another signal) they all share one attribute: each time they are initiated (or 'triggered') they provide a consistent contour, both in terms of the CVs produced and the times taken for them to change.

The most famous, and for a long time the most common envelope generators, are called ADSRs. The acronym stands for Attack/Decay/Sustain/Release, and these names represent the four stages of the EG. Three of them -- Attack, Decay, and Release -- are measures of time, while the fourth -- the Sustain -- is a voltage level. (See Figure 4.) The ADSR is, in many ways, a stroke of genius and, despite its great simplicity, it provides approximations to the contours of the sounds generated by a huge number of natural instruments.

For example, imagine the sounds produced by things as different as a pipe organ, a trombone and a thunderclap. Now consider how the loudness contour of each of these can be described in terms of its A, D, S and R stages. Remember:[![](http://media.soundonsound.com/sos/jul99/images/secret5small.gif)][6]

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The Attack time determines the speed at which the sound reaches its maximum loudness.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The Decay time determines the speed at which the loudness drops until it reaches...

![](http://media.soundonsound.com/images/regulars/bulbow.gif) ...the Sustain Level, the level the loudness maintains until...

![](http://media.soundonsound.com/images/regulars/bulbow.gif) ...it decays to its final level (usually silence) in a time determined by the Release time.

The organ has a rapid attack and maintains its full volume before dropping to silence when the player releases the key. Hence its loudness contour is almost precisely rectangular. Indeed, this shape has become so closely associated with organs that it is often referred to as an 'organ envelope', even when it is used in sounds that bear no relation to organ itself.

By contrast, the trombone 'speaks' more slowly, and its loudness usually peaks at the end of the attack stage before falling back to a lower, sustained level. When the player stops blowing, the sound rapidly falls back to silence.

Quiet different from either of these, the loudness of a thunderclap often develops relatively slowly, and there are no decay or sustain stages; once it has peaked, the loudness dies away slowly.

As you can see from Figure 5, these contours are fundamentally different from one another. Let's take the trombone envelope first. This requires all four ADSR parameters, with moderate attack, decay and release times and a moderate sustain 

"The ADSR is, in many ways, a stroke of genius and, despite its great simplicity, it provides approximations to the contours of the sounds generated by a huge number of natural instruments."

level. The organ envelope is clearly simpler, and requires just three of the ADSR envelope's parameters, with virtually instantaneous attack and release, and a maximum sustain level. In contrast, the thunderclap only utilises two parameters. It has no Sustain or Release values (actually, this isn't always true, but we'll discuss that in a later part of this series).

However you set the parameters of the envelope generator in your synth, if it is connected to the VCA, it has simply replaced the general term 'controller' in Figure 2\. Provided that you can trigger it at will, you have a device that will shape this aspect of your sound whenever you want.

**Low Frequency Oscillators And Tremolo**

Let's return for a moment to the concepts relating to oscillators, described in Part 1 of this series (see _SOS_ May '99). You will remember that every harmonic sound has a fundamental frequency that is the simplest mode of vibration of the oscillator producing it. If this fundamental lies in the range of approximately 20Hz (20 vibrations per second) to 20kHz (20,000 vibrations per second) you should hear the sound as an audible tone.[![](http://media.soundonsound.com/sos/jul99/images/secret6small.gif)][7]

Now consider again the hi-fi amplifier and its volume knob. If you swing the control from side to side once or twice per second you will introduce a new, periodic effect to the sound: that of tremolo. You are, in essence, applying an oscillator to the hi-fi's volume. And although the frequency of this oscillator is much less than 20Hz, its effect is clearly musically important.

It should come as no surprise, therefore, to find that most synthesizers have dedicated devices -- Low-Frequency Oscillators (LFOs) -- generating low-frequency signals that control many of the synth's other functions. On most instruments, the LFO(s) produce oscillations in a range of frequencies lying between about 0.1Hz (one cycle every ten seconds) and 20Hz. These are suitable for producing relatively simple sonic effects, and as you can see in Figure 7, tremolo is just a more specific example of the setup shown Figure 2: in this case, it's an LFO rather than an EG controlling the gain of the amplifier.[![](http://media.soundonsound.com/sos/jul99/images/secret7small.gif)][8]

Trivial though Figure 7 may be to most readers, it also demonstrates the three types of modules present in all synthesizers. In this configuration:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The Tone Generator is a _Signal Generator_ -- it produces the basic audio tone;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The Voltage Controlled Amplifier is an example of a _Modifier_ -- it changes the audio signal in some way;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) The LFO Sinewave generator is acting as a _Controller_ -- it is directing the signal-modifying action of the Modifier itself.

But simple as this example is, you can use this architecture to produce some extremely complex sounds. You just need to change one detail in the setup...[![](http://media.soundonsound.com/sos/jul99/images/secret8small.gif)][9]

The LFOs on more powerful synths are often capable of producing higher-frequency oscillations that stray well into the audio range. Furthermore, these LFOs often offer a wide range of waveforms. But if you can modulate a signal with an audio-frequency LFO, why can't you use another Tone Generator to do so? Of course, there's no reason why you shouldn't, and the architecture in Figure 8 allows you to create the complex sounds alluded to above.

**... And The Point Is ...?**

Although this article has never strayed from the basics, three major concepts have been introduced: Control Voltages, Envelope Generators, and Low Frequency Oscillators. But these are not the most important lessons to learn.

Look again at the diagrams in this article. In each of these the audio signal has been represented by the 

"...it's not a signal's source that is important, it's the destination that determines whether it is best viewed   
as an audio signal or a controller."

horizontal arrows, while controlling signals have been shown as vertical arrows. I like to think of these as (i) signals that you hear, and (ii) signals that control what you hear. Obvious, huh? But on the other hand, you must also recognise that in voltage terms, there is actually no difference between these signals. Consequently, many synth modules can act equally as signal generators, modifiers, and controllers, depending only upon where they are placed (and how they are used) within the sound-generating architecture.

In other words: an analogue synth uses fluctuating voltage to represent audio signals and other fluctuating voltages to shape and control them. But it's not a signal's source that is important, it's the destination that determines whether it is best viewed as an audio signal or a controller.

And that is one of the most important synth secrets of them all. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][10]

[0]: http://www.soundonsound.com/sos/jul99/articles/synthsecrets.htm
[1]: http://www.soundonsound.com/search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jul99/images/secret1big.gif
[3]: http://media.soundonsound.com/sos/jul99/images/secret2.gif
[4]: http://media.soundonsound.com/sos/jul99/images/secret3.gif
[5]: http://media.soundonsound.com/sos/jul99/images/secret4.gif
[6]: http://media.soundonsound.com/sos/jul99/images/secret5.gif
[7]: http://media.soundonsound.com/sos/jul99/images/secret6.gif
[8]: http://media.soundonsound.com/sos/jul99/images/secret7.gif
[9]: http://media.soundonsound.com/sos/jul99/images/secret8.gif
[10]: http://www.soundonsound.com