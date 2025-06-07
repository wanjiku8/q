import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Empowering LGBTQ+ Voices in Kenya",
      description: "We work tirelessly to advocate for the rights and well-being of the queer community.",
      bgColor: "linear-gradient(135deg, #9B87F5, #D946EF)"
    },
    {
      title: "Creating Safe Spaces",
      description: "Our community centers provide support and resources for LGBTQ+ individuals across Kenya.",
      bgColor: "linear-gradient(135deg, #D946EF, #F97316)"
    },
    {
      title: "Education and Awareness",
      description: "Through workshops and campaigns, we're changing minds and building a more inclusive society.",
      bgColor: "linear-gradient(135deg, #F97316, #0EA5E9)"
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>

     <section style={{
  // background: 'transparent',
  padding: '6rem 3rem',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap-reverse',
  gap: '3rem',
  maxWidth: '1280px',
  margin: '0 auto',
}}>
  {/* Background Gradient Overlay */}
  <div style={{
    position: 'absolute',
    inset: 0,
    background: 'white',
    zIndex: 0,
    borderRadius: '1rem'
  }} />

  {/* Text Content */}
  <div style={{
    position: 'relative',
    zIndex: 1,
    flex: '1 1 500px',
    color: 'black',
  }}>
   <h1 style={{
  fontSize: '4rem',         // larger
  fontWeight: 900,          // boldest
  marginBottom: '1.5rem',
  lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif", // modern clean font
}}>
  Be Proud. Be Bold. Be You.
</h1>

<p style={{
  fontSize: '1.25rem',
  fontWeight: 300,          // thinner weight
  lineHeight: '1.6',
  marginBottom: '2.5rem',
  maxWidth: '600px',
  fontFamily: "'Poppins', sans-serif", // same font, lighter weight
}}>
  Queer Kenya is a vibrant space where stories are shared, identities celebrated, and communities united.
</p>

    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link to="/contact" style={{
        backgroundColor: '#fff',
        color: '#9333ea',
        fontWeight: '600',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        Get Involved
      </Link>
      <Link to="/stories" style={{
        backgroundColor: 'transparent',
        border: '2px solid black',
        color: 'black',
        fontWeight: '600',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
      }}>
        Hear Our Stories
      </Link>
    </div>
  </div>

  {/* Illustration */}
  <div style={{
    position: 'relative',
    zIndex: 1,
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <img
      src="https://img.freepik.com/free-vector/watercolor-gender-pronouns-illustration_23-2150462592.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740" // you can replace this with another LGBTQ+/community illustration
      alt="Illustration of community pride"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '1rem',
      }}
    />
  </div>
</section>


     {/*New Illustration / Identity Section */} 
<section style={{
  padding: '5rem 2rem',
  backgroundColor: '#f8f6f7',
}}>
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '2rem',
  }}>
    
    {/* Image / Illustration */}
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2620/2620997.png"
        alt="Community Pride"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      />
    </div>

    {/* Info Text */}
    <div>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '1rem',
        color: '#1a1f2c',
        fontFamily: "'Poppins', sans-serif",
      }}>
        Celebrating Diversity, Embracing Unity
      </h2>
      <p style={{
        fontSize: '1.125rem',
        fontWeight: 300,
        color: '#374151',
        lineHeight: '1.75',
        fontFamily: "'Poppins', sans-serif",
      }}>
        At <strong>Queer Kenya</strong>, we celebrate the spectrum of gender and sexual identities through art,
        culture, and dialogue. Whether you're looking for community, support, or a place to express yourself freely — you belong here.
      </p>
    </div>

  </div>
</section>


    {/* Our Impact Section */}
<section style={{
  padding: '5rem 2rem',
  background: 'linear-gradient(135deg, #ecf0ff 0%, #fdf2f8 100%)'
}}>
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '2.5rem',
      color: '#2D2A45',
      lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif",
    }}>
      Our Impact
    </h2>

    <div style={{
      position: 'relative',
      height: '320px',
      overflow: 'hidden',
      borderRadius: '1.25rem',
      boxShadow: '0 12px 25px rgba(0,0,0,0.08)',
    }}>
      {slides.map((slide, index) => (
        <div key={index} style={{
          position: index === currentSlide ? 'relative' : 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          opacity: index === currentSlide ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
          background: slide.bgColor || 'linear-gradient(to right, #a18cd1, #fbc2eb)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem',
            fontFamily: "'Poppins', sans-serif"
          }}>{slide.title}</h3>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 300,
            maxWidth: '650px',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>{slide.description}</p>
          <Link to="/about" style={{
            backgroundColor: '#fff',
            color: '#9333ea',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>Learn More</Link>
        </div>
      ))}

      {/* Nav buttons */}
      <button 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18L9 12L15 6" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        aria-label="Next slide"
      >
        <svg width="24" height="24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6L15 12L9 18" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.6rem'
      }}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#9333ea' : '#e5e7eb',
              border: '2px solid white',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Vision, Mission, Values Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '2.5rem',
      color: '#2D2A45',
      lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif",
            
          }}>Our Foundation</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#9B87F5',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12H5M22 12H19M12 2V5M12 19V22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M16.95 7.05L19.07 4.93M4.93 19.07L7.05 16.95" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2"/>
                </svg>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Vision</h3>
              </div>
              <div style={{
                padding: '2rem'
              }}>
                <p style={{
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  A Kenya where LGBTQ+ individuals live with dignity, equality, and the freedom to be their authentic selves without fear of discrimination or violence.
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#D946EF',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 22V12M5 8V2M19 22V16M19 12V2M12 22V16M12 12V2M1 12H9M15 16H23M9 6H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Mission</h3>
              </div>
              <div style={{
                padding: '2rem'
              }}>
                <p style={{
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  To advocate for the rights of the LGBTQ+ community in Kenya through community support, education, and policy reform, creating a more inclusive and accepting society.
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                backgroundColor: '#F97316',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.93 4.93L9.17 9.17M14.83 14.83L19.07 19.07M19.07 4.93L14.83 9.17M9.17 14.83L4.93 19.07M8.57 2.38C9.63 2.13 10.76 2 12 2C17.52 2 22 6.48 22 12C22 13.24 21.87 14.37 21.62 15.43M16 16C15.42 16.4 14.74 16.68 14 16.8M10 16.8C9.26 16.68 8.58 16.4 8 16M7.2 10C7.32 9.26 7.6 8.58 8 8M16.8 10C16.68 9.26 16.4 8.58 16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="1" stroke="white" strokeWidth="2"/>
                </svg>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  color: 'white'
                }}>Values</h3>
              </div>
              <div style={{
                padding: '2rem'
              }}>
                <ul style={{
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555'
                  }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#9B87F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>✓</div>
                    <span>Respect for human dignity</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555'
                  }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#D946EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>✓</div>
                    <span>Inclusivity and diversity</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    color: '#555'
                  }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#F97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>✓</div>
                    <span>Social justice and equality</span>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#555'
                  }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#0EA5E9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>✓</div>
                    <span>Community empowerment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#1A1F2C',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
      fontWeight: '800',
      textAlign: 'center',
      lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif",
            
            
          }}>Join Our Movement</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
            
          }}>
            Together, we can create a more inclusive and accepting Kenya. 
            Whether you're looking for support, want to volunteer, or are interested in our advocacy work,
            we welcome you to be part of our community.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: '#9B87F5',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}>Join Us</Link>
            <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#9B87F5',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid #9B87F5',
              textDecoration: 'none'
            }}>Contact Us</Link>
            <Link to="/about" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid white',
              textDecoration: 'none'
            }}>Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;