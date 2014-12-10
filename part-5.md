# Synth Secrets, Part 5: Further With Filters  
_Original article: [http://www.soundonsound.com/sos/sep99/articles/synthsecrets.htm][0]_

**Gordon Reid** continues his series on the theory of subtractive synthesis by delving deeper into the amazingly complex world of the analogue audio filter. This is the fifth article in a 63-part series. Read [all parts][1].

Last month, we started looking at audio filters, demonstrating (if not proving) that they are also phase-shifters, and therefore mess with your audio signals in more ways than one. In doing so, we skipped over the most important aspect of such devices: their abilities to remove parts of the audio spectrum and create new tones from old. But if you think that this is the easy bit, or that you already know how filters attenuate signals, the chances are that you're wrong (on both counts). So let's get stuck in, and dispel a few myths...

**Passive Filters**

[![](http://media.soundonsound.com/sos/sep99/images/synthfig1s.gif)][2]Figure 1 shows the passive low-pass RC filter first introduced last month (incidentally, you can, with a fair degree of accuracy, define a passive component as one that draws no power except that presented as the signal at its input -- so resistors, capacitors and inductors are examples of passive components, while transistors and other amplifiers are not). If you read last month's instalment, you may remember that we can define the cutoff frequency of an RC filter simply by choosing appropriate values for the two passive components within it. So far, so good... that tells us where in the audible spectrum the filter will take effect, but is doesn't tell us what the extent of its effect will be.

The relationship between what you put into a filter and what you get out is called the Transfer Function, and strictly speaking, this should encompass both the amplitude response (ie. effect on volume) and the phase response of the filter. [![](http://media.soundonsound.com/sos/sep99/images/synthfig2s.gif)][3]But, since we discussed the phase-shifting aspect last month, we're only going to consider the amplitude response this month. As it happens, the idealised transfer function of our RC filter is very simple: for every doubling of the frequency above the cutoff frequency (which I will call Fc), the gain at the output is halved (see Figure 2, ).

So, for example, if Fc is 1kHz, the gain at 2kHz is 1/2 (ie. the output is halved), the gain at 4kHz is 1/4 (the output is a quarter)... and so on. Since each doubling of the frequency is equivalent to moving up an octave, and each successive halving of the gain is known as an attenuation of six decibels (6dB), this response is most commonly called a 6dB/octave filter.

Unfortunately (and despite its ubiquitous use within the music industry) Figure 2 is actually _wrong_. Figure 3 shows a more accurate representation of the transfer function. As you can see, the signal amplitude is already down by 3dB at the cutoff frequency. This is not a fault. In fact, in electrical engineering, the position of this 3dB cut _defines_ the cutoff frequency. So, let's state this month's first Synth Secret:

_[![](http://media.soundonsound.com/sos/sep99/images/synthfig3s.gif)][4]The cutoff frequency of a passive low-pass filter does not define the frequency at which the filter starts to work; it is itself defined as that frequency at which the signal is already attenuated by 3dB. And, since an attenuation of 3dB is easily perceived by the human ear, this means that you are already significantly affecting the signal at the cutoff frequency._

Now, let's back-track a little and consider what a simple low-pass filter does to a common waveform. To simplify matters, we'll use the idealised low-pass filter response seen in Figure 2, because its sharp 'knee' makes it easier to recognise what's happening. Figure 4 shows the harmonic structure of the most common analogue synthesizer waveform of all: the sawtooth. All the harmonics are present in this signal, and their amplitudes relative to the fundamental are defined by the simple relationship 1/(harmonic number). Drawn on conventional graph axes, the amplitudes of the first 200 harmonics look like the graph shown in Figure 4 (see page 101). However, Figure 4 is far from the best way to represent these harmonics. Much better is the graph with logarithmic axes shown in figure 5\. This looks quite different, but it[![](http://media.soundonsound.com/sos/sep99/images/synthfig4s.gif)][5] represents exactly the same information, so don't worry if you don't know what a logarithmic scale is. Furthermore, it should be obvious why I have chosen to change the axes of the graph in this way, even if you _don't_ know what a logarithmic scale is: unlike in Figure 4, the amplitude relationship is now a straight line, and this makes it easy to see the filters' effects in the following graphs. Indeed, if you now look back at Figures 2 and 3 and study the axes, you will see that these graphs also have logarithmic axes.

**Applying The Filter**

So let's see what a 6dB/octave RC filter with a cutoff frequency of, say, 3kHz does to the harmonics and waveform of a 100Hz sawtooth wave. Figure 6 shows how the filter attenuates the frequencies above 3kHz. If you bother to measure the new slope, you'll find that the additional 'rolloff' (as the attenuation is commonly known, for reasons which should be obvious from looking at the graph) conforms to the 6dB/octave rule mentioned above. If you now look at Figures 7 and 8, you'll see that the first diagram shows our idealised 100Hz sawtooth waveform with all its harmonics up to 20kHz unattenuated, while the latter shows the same signal processed by our 3kHz filter. As you can see, there's not much visible difference between the two waveforms. This is because the 3kHz cutoff frequency allows the first [![](http://media.soundonsound.com/sos/sep99/images/synthfig5_6s.gif)][6]30 harmonics through untouched, and it's only the low-amplitude high-frequency harmonics that are affected. Nevertheless, the human ear's enormous sensitivity ensures that you hear even this tiny difference as a 'dullness' or lack of 'top end' in the filtered sound.

**Steepening The Slope**

Filters with a 6dB/octave characteristic are used as tone controls in stereo systems, and occasionally within synthesizers as supplementary brightness controls, but they are not much use for true synthesis. This is because they don't modify the waveform enough to change the tone very dramatically -- filtered signals just sound like the original, only duller. Clearly, a more powerful filter is required if new timbres are to be created.

So what passive components allow us to create simple circuits with more powerful 12dB/octave, 18dB/octave or even 24dB/octave attenuations? Unfortunately, none of them do -- so a different approach is needed. Why not cascade a number of RC filters to create the required steeper rolloffs? For example, two filters could be used together to create a 12dB/octave filter, three for an 18dB/octave filter, and four for a 24dB/octave filter. The four-element filter would then look like the idealised circuit shown in Figure 9 , and you would expect its idealised transfer function to look like Figure 10\.

However, sadly, it doesn't work as simply as that. Our model of the response of the passive RC filter requires certain[![](http://media.soundonsound.com/sos/sep99/images/synthfig7_8s.gif)][7] assumptions about the inputs and outputs; and while you can just about satisfy these assumptions for a single RC circuit, they break down completely if you try cascading elements as I've just proposed. So where do we go from here?

**Up the Pole**

If you've been in the synth game for a while, you'll have heard that 12dB/octave filters are sometimes called '2-pole' filters, and 24dB/octave filters are called '4-pole' filters. You might think it safe to assume, therefore, that each of the 6dB/octave sections in Figure 9 is a 'pole'. Unfortunately, you would be wrong (although not a million miles from the truth).

The name (in this context) is a consequence of a powerful mathematical operation called a 'Laplace Transform'. This transform, while difficult to describe in words, is a convenient operation that allows mathematicians to analyse the responses of linear systems when they are presented with audio signals (as for 'linear systems' and the maths involved... no, don't even dream of asking!) Anyway, the term 'pole' comes about because, when you represent an RC filter using a graph in the 'Laplace Transform domain', it looks like a flat sheet of rubber with a tent-pole pushing it sharply upwards at some point. A single 6dB/octave RC filter has one such 'tent-pole', and is therefore called a '1-

"Filters with a 6dB/octave characteristic are used as tone controls in stereo systems, and occasionally within synthesizers as supplementary brightness controls, but they are not much use for true synthesis."

pole' filter, a 12dB/octave filter has two 'poles'... and so on. Therefore, if you want to create a passive 24dB/octave filter with a single cutoff frequency for each of its four elements, it would seem safe to assume that would you want all the poles in the same place in the graph. And, for once, intuition is correct. Unfortunately, as[![](http://media.soundonsound.com/sos/sep99/images/synthfig9s.gif)][8] I've already explained, achieving this using passive components is all but impossible because, when we cascade the sections, they interact and no longer function as they would in isolation. So, instead of the perfect 24dB/octave response of figure 10, the cutoff frequency for each section is different, and the amplitude response of our transfer function has four 'knees', as shown in Figure 11\.

This then, leads us to an important conclusion: while a passive 4-pole filter will tend to a 24dB/octave rolloff at high frequencies, it will, to a greater or lesser extent, exhibit regions within which the rolloff is 6dB/octave, 12dB/octave and 18dB/octave. Moreover, if you look closely, you'll see that the transfer functions within these intermediate regions are not quite straight lines, meaning that the relationship between the frequency and the input and output powers are not as straightforward as before.

**Let's Get Active**

Let's recap our position so far: we've designed a circuit with an theoretical rolloff of 24d

**Tricks Of The Trade**

There are a number of practical tricks that you can employ to overcome the inherent deficiencies of audio filters. For example, when designing his Fénix semi-modular (reviewed in _SOS_ February '99) Marc Paping of Synton used a 5-pole design (which has a theoretical maximum rolloff of 30dB/octave) to ensure that the Fénix's 'Moog-style' low-pass filter actually achieved a true 24dB/octave rolloff in the audio band.

On the other hand, it's also easy to get it wrong. A simple calculation error led to the infamous ARP4075 filter used in some ARP synthesizers. In theory this was a first-class filter, but the cutoff frequency wouldn't exceed 12kHz or so, and this made the instruments sound dull and lifeless when compared to their predecessors. Amazingly, you could easily correct the problem by changing just four resistors on the circuit board!

B/octave but, because the filter elements interact, the cutoff frequencies of each are different. Furthermore, the 'knee' of each cutoff is rounded and (trust me on this) even if the sections' cutoff frequencies were identical, the composite 'knee' would get no 'sharper'. We've also ignored any effects on the signal in the supposedly untouched 'pass band' below the cutoff frequency (which we know actually suffers attenuation to an extent, and may well endure other side-effects too) and, finally, we've completely ignored the phase-shifting effects of each of the filter stages.

You might not unreasonably conclude at this point that this design approach is pretty worthless -- but fortunately, we can deal with some of the above problems by inserting components between the filter stages to separate (or 'buffer') the[![](http://media.soundonsound.com/sos/sep99/images/synthfig10_11s.gif)][9] responses of each from the other. These components include operational amplifiers (more commonly called 'op-amps') and it is these that make a filter 'active'.

Unsurprisingly, given what we've just learned, the filters in all analogue synthesizers are active (with the exceptions of a few brightness controls and basic equalisers). These filters are more complicated than their passive brethren but have the advantage that, by suitable choice of design, you can make them respond in desirable ways. For example, you can concentrate on obtaining a sharper knee at the cutoff frequency, or maximise the flatness in the pass-band, or engineer a tailored phase response. Unfortunately, you can't optimise all of these simultaneously, and so as in many other areas of recording equipment manufacture, good filter design is often a trade-off between desirable attributes.

But there's another consideration: even when we discuss the fundamental problems of these filters, we treat the electrical circuits themselves as if all the components within them were 'ideal', and responded in ideal ways. Yet many components are rated to within 1 percent, 2 percent... sometimes 10 percent of their quoted values. This 

"the term 'pole' comes about because, when you represent an RC filter using a graph in the 'Laplace Transform domain', it looks like a flat sheet of rubber with a tent-pole pushing it sharply upwards at some point." 

means that two ostensibly identical circuits will often be different in subtle ways. So, even in the case of an active 24dB/octave filter, it's highly unlikely that (for example) all four 'poles' will be perfectly superimposed, one upon the other. This means that our conclusion regarding passive filters is itself a generally applicable Synth Secret:

_A 4-pole filter will always tend to a 24dB/octave rolloff at high frequencies, but it will exhibit regions within which the rolloff is 6dB/octave, 12dB/octave, and 18dB/octave._

If all this leads us to just one conclusion, it's this: filters are conspicuously more complex than we are often led to believe. Indeed, if you were to accept the common, simplistic definitions of 24dB/octave filters you might expect (say) the Minimoog's and the later ARPs' filters to sound the same. This is clearly not the case. Similarly, you might think that the MS20's and the Oberheim SEM's 12dB/octave filters would be similar, and this is equally false. So this month's final Synth Secret is something that you all knew anyway:

_Whether the differences are subtle or glaringly obvious, every analogue filter design sounds different from every other. [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][2]_

[0]: http://www.soundonsound.com/sos/sep99/articles/synthsecrets.htm
[1]: http://www.soundonsound.com/search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/sep99/images/synthfig1b.gif
[3]: http://media.soundonsound.com/sos/sep99/images/synthfig2b.gif
[4]: http://media.soundonsound.com/sos/sep99/images/synthfig3b.gif
[5]: http://media.soundonsound.com/sos/sep99/images/synthfig4b.gif
[6]: http://media.soundonsound.com/sos/sep99/images/synthfig5_6b.gif
[7]: http://media.soundonsound.com/sos/sep99/images/synthfig7_8b.gif
[8]: http://media.soundonsound.com/sos/sep99/images/synthfig9b.gif
[9]: http://media.soundonsound.com/sos/sep99/images/synthfig10_11b.gif