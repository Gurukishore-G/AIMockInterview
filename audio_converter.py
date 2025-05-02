from pydub import AudioSegment
import os

def convert_wav_to_m4a(input_wav_path, output_m4a_path=None):
    """
    Convert a WAV file to M4A format.
    
    Args:
        input_wav_path (str): Path to the input WAV file
        output_m4a_path (str, optional): Path for the output M4A file. 
                                       If not provided, will use the same name as input with .m4a extension
    
    Returns:
        str: Path to the converted M4A file
    """
    try:
        # If output path is not specified, create one from the input path
        if output_m4a_path is None:
            output_m4a_path = os.path.splitext(input_wav_path)[0] + '.m4a'
        
        # Load the WAV file
        audio = AudioSegment.from_wav(input_wav_path)
        
        # Export as M4A
        audio.export(output_m4a_path, format='m4a')
        
        print(f"Successfully converted {input_wav_path} to {output_m4a_path}")
        return output_m4a_path
    
    except Exception as e:
        print(f"Error converting file: {str(e)}")
        raise

if __name__ == "__main__":
    # Example usage
    input_file = "path/to/your/audio.wav"
    convert_wav_to_m4a(input_file) 